import express from "express";
import db from "./database/connection";

db("users")
	.select("*")
	.then((value) => console.log(value));

const app = express();
app.use(express.json());

app.get("/users", (request, response) => {
	response.json("Foi");
});

app.listen(3333);
