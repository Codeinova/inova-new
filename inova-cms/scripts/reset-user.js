'use strict';

async function resetUser() {
  const { createStrapi, compileStrapi } = require('@strapi/strapi');

  const appContext = await compileStrapi();
  const app = await createStrapi(appContext).load();

  try {
    console.log('Buscando usuario...');
    
    // Buscar todos los usuarios
    const users = await app.query('plugin::users-permissions.user').findMany();
    
    console.log(`Se encontraron ${users.length} usuario(s):`);
    
    for (const user of users) {
      console.log(`
- Email: ${user.email}
- Username: ${user.username}
- Bloqueado: ${user.blocked}
- Confirmado: ${user.confirmed}
      `);
      
      // Desbloquear y confirmar
      await app.query('plugin::users-permissions.user').update({
        where: { id: user.id },
        data: {
          blocked: false,
          confirmed: true,
        },
      });
      
      console.log(`✅ Usuario ${user.email} desbloqueado y confirmado`);
    }
    
    console.log('✅ Todos los usuarios han sido reseteados');
    
  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await app.destroy();
    process.exit(0);
  }
}

resetUser();
