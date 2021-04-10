const Database = require("./config");

const initDb = {
  async init() {
    const db = await Database();

    await db.exec(`
      CREATE TABLE profile(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      avatar TEXT,
      monthly_budget INT,
      days_per_week INT,
      hours_per_day INT,
      vacation_per_year INT,
      value_hour INT
    )`);

    await db.exec(`
      CREATE TABLE jobs(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      daily_hours INT,
      total_hours INT,
      created_at DATETIME
    )`);

    await db.run(`
      INSERT INTO profile(
        name,
        avatar,
        monthly_budget,
        days_per_week,
        hours_per_day,
        vacation_per_year,
        value_hour
      ) VALUES (
          'Pedro Isac',
          'https://avatars.githubusercontent.com/u/54474627?s=60&v=4',
          10000,
          2,
          10,
          2,
          75
        )
    `);

    await db.run(`
      INSERT INTO jobs(
        name,
        daily_hours,
        total_hours,
        created_at
      ) VALUES (
          'Todo dia - Mobile',
          8,
          28,
          1617514376018
        )
    `);

    await db.close();
  },
};

initDb.init();
