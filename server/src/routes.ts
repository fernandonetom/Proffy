import express from "express";
import ClassesController from "./controllers/ClassesController";
import db from "./database/connection";
const routes = express.Router();

const classesController = new ClassesController();

routes.post("/classes", classesController.create);
routes.get("/classes", classesController.index);
routes.get("/users", async (request, response) => {
	//const data = await db("users").delete();
	const data = await db("users").select("*");
	response.json(data);
});
export default routes;
