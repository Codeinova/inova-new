'use strict';

async function setupAuthenticatedUser() {
  try {
    console.log('📋 Configurando usuario y permisos para Authenticated...\n');

    // 1. Obtener el rol "authenticated"
    const authenticatedRole = await strapi.query('plugin::users-permissions.role').findOne({
      where: { type: 'authenticated' },
    });

    if (!authenticatedRole) {
      console.error('❌ Rol "authenticated" no encontrado');
      return;
    }

    console.log(`✅ Rol encontrado: ${authenticatedRole.name}`);

    // 2. Configurar permisos para el rol Authenticated
    const permissionsConfig = {
      // Artículos - CRUD completo
      'api::article.article': ['find', 'findOne', 'create', 'update', 'delete'],
      // Categorías - Lectura
      'api::category.category': ['find', 'findOne'],
      // Autores - Lectura
      'api::author.author': ['find', 'findOne'],
      // Upload - Subir y eliminar imágenes
      'api::upload.upload': ['upload', 'destroy'],
    };

    // 3. Eliminar permisos existentes del rol
    const existingPermissions = await strapi.query('plugin::users-permissions.permission').findMany({
      where: { role: authenticatedRole.id },
    });

    console.log(`\n🗑️  Eliminando ${existingPermissions.length} permisos existentes...`);
    for (const permission of existingPermissions) {
      await strapi.query('plugin::users-permissions.permission').delete({
        id: permission.id,
      });
    }
    console.log('✅ Permisos antiguos eliminados');

    // 4. Crear nuevos permisos
    console.log('\n🔧 Configurando nuevos permisos...');
    let permissionCount = 0;

    for (const [controller, actions] of Object.entries(permissionsConfig)) {
      for (const action of actions) {
        const permission = await strapi.query('plugin::users-permissions.permission').create({
          data: {
            action: `${controller}.${action}`,
            role: authenticatedRole.id,
            enabled: true,
          },
        });
        console.log(`  ✅ ${controller}.${action}`);
        permissionCount++;
      }
    }

    console.log(`\n✅ Total de permisos configurados: ${permissionCount}`);

    // 5. Crear nuevo usuario (opcional)
    console.log('\n👤 Creando usuario de prueba...');
    
    try {
      // Verificar si el usuario ya existe
      const existingUser = await strapi.query('plugin::users-permissions.user').findOne({
        where: { email: 'admin@blog.com' },
      });

      if (existingUser) {
        console.log('⚠️  Usuario admin@blog.com ya existe');
      } else {
        const newUser = await strapi.query('plugin::users-permissions.user').create({
          data: {
            username: 'admin_blog',
            email: 'admin@blog.com',
            password: 'Admin@2024', // Cambiar en producción
            confirmed: true,
            blocked: false,
            role: authenticatedRole.id,
          },
        });

        console.log(`✅ Usuario creado: ${newUser.email}`);
        console.log(`   Usuario: admin_blog`);
        console.log(`   Contraseña: Admin@2024`);
        console.log(`   ⚠️  IMPORTANTE: Cambiar contraseña en producción`);
      }
    } catch (error) {
      console.error('⚠️  Error al crear usuario:', error.message);
    }

    console.log('\n✅ Configuración completada exitosamente!');
    console.log('\n📝 Permisos configurados:');
    console.log('   - Artículos: find, findOne, create, update, delete');
    console.log('   - Categorías: find, findOne');
    console.log('   - Autores: find, findOne');
    console.log('   - Upload: upload, destroy');

  } catch (error) {
    console.error('❌ Error:', error);
  }
}

async function main() {
  const { createStrapi, compileStrapi } = require('@strapi/strapi');

  const appContext = await compileStrapi();
  const app = await createStrapi(appContext).load();

  app.log.level = 'error';

  await setupAuthenticatedUser();
  await app.destroy();

  process.exit(0);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
