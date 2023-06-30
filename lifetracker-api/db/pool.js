const { Pool } = require("pg");

// SQL script as a string to create a table called users
const sqlScript = `
CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);
`;

// DB information to connect
const pool = new Pool({
  user: "postgres",
  password: "postgres",
  host: "localhost",
  port: 5432,
  database: "database_name",
});

// Establish a connection to the database
pool.connect((err, client, done) => {
  if (err) {
    console.error("Error connecting to the database", err);
    return;
  }

  // Execute the SQL script
  client
    .query(sqlScript)
    .then(() => {
      console.log("Table created successfully");
      done(); // Release the client back to the pool
    })
    .catch((error) => {
      console.error("Error creating table", error);
      done(); // Release the client back to the pool
    });
});

// Export the pool to be used in a different file
module.exports = pool;

