// scripts/runTrailSeeder.js
require('dotenv').config();
const { sequelize } = require('../db/models');
const trailSeeder = require('../db/seeders/20210602154019-trails_data.js');

(async () => {
  try {
    console.log('Starting trail seeder diagnostic...');
    console.log('DB Config:', {
      database: sequelize.config.database,
      host: sequelize.config.host,
      dialect: sequelize.config.dialect
    });
    
    console.time('seed-trails');
    
    // Test DB connection first
    await sequelize.authenticate();
    console.log('✓ Database connection established');
    
    // Check if States table has data (trails reference state_id)
    const stateCount = await sequelize.query('SELECT COUNT(*) as count FROM "States"', { 
      type: sequelize.QueryTypes.SELECT 
    });
    console.log(`✓ States table has ${stateCount[0].count} rows`);
    
    // Check if Trails table exists and current count
    const trailCount = await sequelize.query('SELECT COUNT(*) as count FROM "Trails"', { 
      type: sequelize.QueryTypes.SELECT 
    });
    console.log(`✓ Trails table has ${trailCount[0].count} rows before seeding`);
    
    // Run the seeder
    console.log('Running trail seeder...');
    await trailSeeder.up(sequelize.getQueryInterface(), sequelize.constructor);
    
    console.timeEnd('seed-trails');
    
    // Check final count
    const finalTrailCount = await sequelize.query('SELECT COUNT(*) as count FROM "Trails"', { 
      type: sequelize.QueryTypes.SELECT 
    });
    console.log(`✓ Trails table now has ${finalTrailCount[0].count} rows after seeding`);
    
    await sequelize.close();
    console.log('✓ Seeding completed successfully');
  } catch (err) {
    console.error('❌ Seeder error:', err.message);
    console.error('Full error:', err);
    if (sequelize) {
      await sequelize.close();
    }
    process.exit(1);
  }
})();