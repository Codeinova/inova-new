# Sección Novedades - Integración con Strapi

## 📋 Descripción

Esta es la implementación frontend de la sección "Novedades" para la landing page de Innova, con integración completa a Strapi CMS.

## ✨ Características Implementadas

### Vista Pública
- ✅ Listado de artículos con diseño tipo grid/tarjetas
- ✅ Filtros de búsqueda por:
  - Texto (título/descripción)
  - Categoría
  - Rango de fechas
- ✅ Vista detallada de cada artículo
- ✅ Diseño responsive
- ✅ Soporte para Markdown en el contenido

### Panel Administrador
- ✅ Login de administradores en la misma página
- ✅ Dashboard con listado de artículos
- ✅ CRUD completo:
  - Crear nuevos artículos
  - Editar artículos existentes
  - Eliminar artículos
  - Cambiar estado (publicado/borrador)
- ✅ Upload de imágenes destacadas
- ✅ Asignación de categorías y autores
- ✅ Editor de contenido con Markdown

## 🎨 Diseño

El diseño sigue el manual de identidad visual de Innova:
- **Tipografía**: Montserrat (todas las variantes)
- **Colores principales**:
  - Amarillo Innova: `#ecab3f`
  - Amarillo Claro: `#f4cc83`
  - Negro: `#000000`
  - Gris Claro: `#e2e1e0`

## 📦 Archivos Creados

### Tipos y Servicios
- `src/types/strapi.ts` - Tipos TypeScript para las entidades de Strapi
- `src/services/strapiService.ts` - Servicio para comunicación con API de Strapi
- `src/contexts/AuthContext.tsx` - Contexto para autenticación

### Componentes
- `src/components/novedades/ArticleCard.tsx` - Tarjeta de artículo
- `src/components/novedades/ArticleFilters.tsx` - Filtros de búsqueda
- `src/components/novedades/AdminLoginModal.tsx` - Modal de login

### Páginas
- `src/pages/Index.tsx` - Página principal actualizada
- `src/pages/Novedades.tsx` - Listado de artículos (vista pública)
- `src/pages/ArticleDetail.tsx` - Detalle de artículo
- `src/pages/AdminNovedades.tsx` - Dashboard administrativo
- `src/pages/ArticleForm.tsx` - Formulario crear/editar artículo

## 🚀 Configuración

### 1. Variables de Entorno

Crea un archivo `.env` en la raíz de tu proyecto:

```env
VITE_STRAPI_URL=http://localhost:1337
```

Para producción, cambia por la URL de tu servidor Strapi.

### 2. Configuración de Strapi

Asegúrate de que tu Strapi tenga:

#### Colecciones:
- **Article** (artículo)
  - title (texto)
  - description (texto largo)
  - slug (UID basado en title)
  - featuredimage (media)
  - author (relación con Author)
  - category (relación con Category)
  - content (texto rico)
  - publishDate (fecha)
  - status (enumeración: published, draft)

- **Category** (categoría)
  - name (texto)
  - slug (UID)
  - description (texto)
  - articles (relación con Article)

- **Author** (autor)
  - name (texto)
  - email (email)
  - avatar (media)
  - role (texto)
  - bio (texto largo)
  - articles (relación con Article)

#### Permisos:
En Strapi Settings > Users & Permissions Plugin > Roles:

**Public (usuarios sin autenticar)**:
- Article: `find`, `findOne`
- Category: `find`, `findOne`
- Author: `find`, `findOne`

**Authenticated (administradores)**:
- Article: todos los permisos
- Category: todos los permisos
- Author: `find`, `findOne`
- Upload: `upload`, `destroy`

### 3. CORS en Strapi

En `config/middlewares.js` de tu Strapi:

```javascript
module.exports = [
  // ...otros middlewares
  {
    name: 'strapi::cors',
    config: {
      origin: ['http://localhost:5173', 'tu-dominio-produccion.com'],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    },
  },
];
```

## 🔐 Credenciales de Administrador

Para crear el primer administrador en Strapi:
1. Ve a `http://localhost:1337/admin`
2. Completa el formulario de registro del primer administrador
3. Usa esas credenciales en el modal de login de la landing page

## 📱 Rutas

- `/` - Página principal
- `/novedades` - Listado de artículos (público)
- `/novedades/:slug` - Detalle de artículo (público)
- `/admin/novedades` - Panel administrador (requiere login)
- `/admin/novedades/nuevo` - Crear artículo (requiere login)
- `/admin/novedades/editar/:id` - Editar artículo (requiere login)

## 🔧 Integración en tu Proyecto

### Si ya tienes un proyecto React:

1. **Copia los archivos** a tu proyecto:
   - Todos los archivos de `src/types/`
   - Todos los archivos de `src/services/`
   - Todos los archivos de `src/contexts/`
   - Todos los archivos de `src/components/novedades/`
   - Todos los archivos de `src/pages/` relacionados con novedades

2. **Instala las dependencias**:
```bash
npm install axios react-markdown date-fns
```

3. **Actualiza tu App.tsx**:
```tsx
import { AuthProvider } from "@/contexts/AuthContext";

// Envuelve tu app con AuthProvider
<AuthProvider>
  {/* tus rutas */}
</AuthProvider>
```

4. **Agrega las rutas** a tu router:
```tsx
<Route path="/novedades" element={<Novedades />} />
<Route path="/novedades/:slug" element={<ArticleDetail />} />
<Route path="/admin/novedades" element={<AdminNovedades />} />
<Route path="/admin/novedades/nuevo" element={<ArticleForm />} />
<Route path="/admin/novedades/editar/:id" element={<ArticleForm />} />
```

5. **Copia el diseño** de `src/index.css` y `tailwind.config.ts` si quieres usar los colores de Innova

6. **Crea el archivo .env** con tu URL de Strapi

### Si necesitas ajustar el diseño:

Los colores están definidos en `src/index.css` como CSS variables. Puedes modificarlos según tu necesidad:

```css
:root {
  --innova-yellow: 36 86% 59%; /* #ecab3f */
  --innova-yellow-light: 40 82% 74%; /* #f4cc83 */
  --innova-black: 0 0% 0%; /* #000000 */
  --innova-gray: 60 5% 88%; /* #e2e1e0 */
}
```

## 🐛 Solución de Problemas

### Error de CORS
- Verifica que Strapi tenga configurado CORS correctamente
- Asegúrate de que tu dominio esté en la lista de orígenes permitidos

### Imágenes no cargan
- Verifica que `VITE_STRAPI_URL` esté correctamente configurado
- Las imágenes deben estar accesibles públicamente en Strapi

### Login no funciona
- Verifica que el usuario tenga el rol correcto en Strapi
- Revisa los permisos en Strapi Settings > Users & Permissions

### Artículos no aparecen
- Verifica que los artículos tengan `status: "published"`
- Revisa que los permisos públicos incluyan `find` y `findOne` para Articles

## 📝 Notas Adicionales

- Los artículos soportan **Markdown** en el campo `content`
- Las imágenes se suben directamente a Strapi
- El sistema de autenticación usa JWT tokens almacenados en localStorage
- Los filtros son reactivos y se aplican instantáneamente

## 🎯 Próximos Pasos Sugeridos

1. Agregar paginación en el listado de artículos
2. Implementar búsqueda con debounce
3. Agregar preview de Markdown en tiempo real
4. Implementar drag & drop para imágenes
5. Agregar compartir en redes sociales
6. Implementar comentarios (si se requiere)

## 📞 Soporte

Si necesitas más información sobre la configuración en Strapi o ajustes en el frontend, házmelo saber con capturas de pantalla específicas de tu configuración.
