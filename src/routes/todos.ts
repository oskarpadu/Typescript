import { Router } from 'express';
import { TodoController } from '../controllers/todos'

const todoController = new TodoController()
const router = Router()

router.post('/', todoController.createTodo)
router.get('/', todoController.getTodos)
router.patch('/:id', todoController.updateTodo)
router.delete('/:id', todoController.deleteTodo)

export default router;
