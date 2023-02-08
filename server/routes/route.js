import express from 'express';
import { addTodo , getAllCurrentTodos,toggleTodoDone,updateTodo,deleteTodo } from '../controller/todocontroller.js';

const route = express.Router();

route.post('/todos',addTodo);
route.get('/todos', getAllCurrentTodos);
route.get('/todos/:id', toggleTodoDone);
route.put('/todos/:id',updateTodo);
route.delete('/todos/:id',deleteTodo)
export default route;