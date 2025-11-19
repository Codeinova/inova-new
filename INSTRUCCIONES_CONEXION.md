# 🚀 INSTRUCCIONES PARA CONECTAR FRONTEND CON STRAPI

## Estado Actual ✅
- ✅ Strapi corriendo en `http://localhost:1337`
- ✅ Colecciones creadas (Article, Category, Author)
- ✅ Artículos en la BD
- ✅ Frontend en puerto 8080
- ✅ Modal de login visible

## Pasos para Finalizar la Integración

### 1️⃣ CONFIGURAR CORS EN STRAPI (IMPORTANTE)

En tu proyecto Strapi, abre `config/middlewares.js` y asegúrate que tenga:

```javascript
module.exports = [
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      origin: ['http://localhost:8080', 'http://localhost:5173', 'http://localhost:1337'],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization'],
      credentials: true,
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
```

**IMPORTANTE**: Después de cambiar `middlewares.js`, debes **REINICIAR STRAPI**.

### 2️⃣ CREAR USUARIO ADMINISTRADOR EN STRAPI

1. Ve a `http://localhost:1337/admin`
2. Si es primera vez, crea la cuenta del primer admin
3. Si ya existe, ve a **Settings > Users**
4. Crea un usuario con rol **Authenticated** (o usa uno existente)
5. Guarda sus credenciales (email/usuario y contraseña)

### 3️⃣ PROBAR CONEXIÓN DESDE FRONTEND

1. En navegador: http://localhost:8080/novedades
2. Haz clic en el modal de login
3. Ingresa las credenciales del usuario Authenticated
4. Verifica en DevTools (F12):
   - **Console**: No debe haber errores de CORS
   - **Network**: Las peticiones a `localhost:1337/api/...` deben retornar 200/201

### 4️⃣ VERIFICACIÓN MANUAL DE API

Abre en navegador estas URLs para verificar:

```
http://localhost:1337/api/articles
http://localhost:1337/api/categories
http://localhost:1337/api/authors
```

Deberías ver datos JSON (o al menos `{"data":[]}`).

### 5️⃣ SI NO FUNCIONA, REVISA:

**Error CORS:**
- ✓ Actualiza `config/middlewares.js` en Strapi
- ✓ Reinicia Strapi
- ✓ Limpia caché del navegador (Ctrl+Shift+Delete)

**Error de autenticación (401/403):**
- ✓ Verifica que el usuario tenga rol "Authenticated"
- ✓ Verifica permisos en Settings > Roles > Authenticated

**Artículos no aparecen (pero API responde):**
- ✓ Verifica que los artículos tengan `status: published`
- ✓ Verifica permisos públicos en Settings > Roles > Public

## 📝 Variables de Entorno

Tu `.env` está correcto:
```env
VITE_STRAPI_URL=http://localhost:1337
```

✅ Todo está bien configurado en el frontend.

## 🔧 Comandos Útiles

```bash
# En proyecto Strapi (REINICIAR después de cambios en middlewares.js)
npm run develop

# En proyecto Frontend
bun run dev
```

## 📞 Si Necesitas Ayuda

Envía capturas de:
1. Console de DevTools (F12) en http://localhost:8080/novedades
2. Respuesta de http://localhost:1337/api/articles en navegador
3. Archivo `config/middlewares.js` de Strapi
