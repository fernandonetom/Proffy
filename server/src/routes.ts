import express from 'express';
import ClassesController from './controllers/ClassesController';
import db from './database/connection';
import ConnectionsController from './controllers/ConnectionsController';
const routes = express.Router();

const classesController = new ClassesController();
const connectionsController = new ConnectionsController();
routes.post('/classes', classesController.create);
routes.get('/classes', classesController.index);
routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.create);
routes.get('/users', async (request, response) => {
	//const data = await db("users").delete();
	const data = await db('class_schedule').select('*');
	response.json(data);
});
export default routes;
