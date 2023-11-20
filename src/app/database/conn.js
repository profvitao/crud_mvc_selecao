// Do not expose your Neon credentials to the browser
// .env
PGHOST = "ep-rapid-hat-14396715.us-east-2.aws.neon.tech";
PGDATABASE = "bdcopa";
PGUSER = "profvitao";
PGPASSWORD = "IU73zpWnBDmA";
ENDPOINT_ID = "ep-rapid-hat-14396715";

// app.js
const postgres = require("postgres");
require("dotenv").config();

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;

const sql = postgres({
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: 5432,
  ssl: "require",
  connection: {
    options: `project=${ENDPOINT_ID}`,
  },
});

async function getPgVersion() {
  const result = await sql`select version()`;
  console.log(result);
}

getPgVersion();
