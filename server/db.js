const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "Abb00717717abb",
    host: "localhost",
    port: 5432,
    database: "perntodo"
});

module.exports = pool; // export the pool object to be used in other files