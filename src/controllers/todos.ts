import { Request, Response, NextFunction } from 'express'
import { Todo} from '../models/todo'

class TodoController {
    
    todos: Todo[] = []

    constructor() {
        this.createTodo = this.createTodo.bind(this)
        this.getTodos = this.getTodos.bind(this)
        this.updateTodo = this.updateTodo.bind(this)
        this.deleteTodo = this.deleteTodo.bind(this)
    } 

    createTodo = (req: Request, res: Response, next: NextFunction) => {
        try{
            const task = (req.body as {task: string}).task
            const newTodo = new Todo(Math.random().toString(), task)
            this.todos.push(newTodo)
    
            res.status(201).json({
                message: 'Todo created',
                createdTask: newTodo
            })
        } catch (error){
        console.log(error)
        }
    }

    getTodos = (req: Request, res: Response, next: NextFunction) => {
        try{
            res.status(201).json({
                tasks: this.todos
            })
        } catch (error){
            console.log(error)
        }
    }

    updateTodo = (req: Request, res:Response, next: NextFunction) => {
        try{
            const todoId = req.params.id
            const updatedtask = (req.body as {task: string}).task
            const todoIndex = this.todos.findIndex(todo => todo.id === todoId)

            if(todoIndex < 0) {
                throw new Error('Could not find todo')
            }

            this.todos[todoIndex] = new Todo(this.todos[todoIndex].id, updatedtask)

            res.status(200).json({
                message: 'Todo updated',
                updatedTask: this.todos[todoIndex]
            })
        } catch (error){
            console.log(error)
        }
    }

    deleteTodo = (req: Request, res:Response, next: NextFunction) => {
        try{
            const todoId = req.params.id
            const todoIndex = this.todos.findIndex(todo => todo.id === todoId)

            if(todoIndex < 0) {
                throw new Error('Could not find todo')
            }

            this.todos.splice(todoIndex, 1)

            res.status(201).json({
                message: 'Todo deleted'
            })
        } catch (error){
            console.log(error)
        }
    }

}


export { TodoController }