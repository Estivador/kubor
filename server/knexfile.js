module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: __dirname + "/db/data/kubor.sqlite"
    },
    pool: {
      afterCreate: (conn, cb) => {
        conn.run("PRAGMA foreign_keys = ON", cb);
      }
    },
    migrations: {
      directory: __dirname + "/db/migrations"
    }
  },

  staging: {
    client: "sqlite3",
    connection: {
      filename: __dirname + "/db/data/kubor.sqlite"
    },
    pool: {
      afterCreate: (conn, cb) => {
        conn.run("PRAGMA foreign_keys = ON", cb);
      }
    },
    migrations: {
      directory: __dirname + "/db/migrations"
    }
  },

  production: {
    client: "sqlite3",
    connection: {
      filename: __dirname + "/db/data/kubor.sqlite"
    },
    pool: {
      afterCreate: (conn, cb) => {
        conn.run("PRAGMA foreign_keys = ON", cb);
      }
    },
    migrations: {
      directory: __dirname + "/db/migrations"
    }
  }
};
