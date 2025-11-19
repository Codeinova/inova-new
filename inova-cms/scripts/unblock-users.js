'use strict';

async function resetUserBlockedStatus() {
  try {
    console.log('Desbloqueando usuarios...');
    
    // Obtener todos los usuarios
    const users = await strapi.query('plugin::users-permissions.user').findMany();
    
    console.log(`Encontrados ${users.length} usuario(s)`);
    
    for (const user of users) {
      console.log(`Procesando: ${user.email}`);
      
      // Actualizar el usuario para desbloquear
      await strapi.query('plugin::users-permissions.user').update(
        { id: user.id },
        {
          blocked: false,
          confirmed: true,
        }
      );
      
      console.log(`✅ Desbloqueado: ${user.email}`);
    }
    
    console.log('✅ Todos los usuarios han sido desbloqueados');
    
  } catch (error) {
    console.error('Error:', error);
  }
}

async function main() {
  const { createStrapi, compileStrapi } = require('@strapi/strapi');

  const appContext = await compileStrapi();
  const app = await createStrapi(appContext).load();

  app.log.level = 'error';

  await resetUserBlockedStatus();
  await app.destroy();

  process.exit(0);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
