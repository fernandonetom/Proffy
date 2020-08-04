import knex from "knex";
const config = require("../../knexfile");
require("dotenv").config();
const local = process.env.LOCAL === "prod" ? "production" : "development";
const db = knex(config[local]);
export default db;
