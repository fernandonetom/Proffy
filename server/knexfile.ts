import path from "path";
require("dotenv").config();
module.exports = {
	development: {
		client: "pg",
		connection: process.env.DATABASE,
		migrations: {
			directory: path.resolve(__dirname, "src", "database", "migrations"),
		},
		useNullAsDefault: true,
	},

	production: {
		client: "pg",
		connection: process.env.DATABASE,
		migrations: {
			directory: path.resolve(__dirname, "src", "database", "migrations"),
		},
		useNullAsDefault: true,
	},
};
