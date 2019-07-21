

// Update with your config settings.

module.exports = {

  development: {
    useNullAsDefault: true,
    client: 'sqlite3',
    connection: {
      filename: './database/practice.db3'
    },
    migrations: {
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds'
    }

    // production: {
    //   client: 'pg',
    //   connection: dbConnectiion,
    //   migrations: {
    //     tableName: 'knex_migrations',
    //     directory: './database/migrations'
    //   },
    //   seeds: {
    //     directory: './database/seeds'
    //   }
    // }
  }
};
