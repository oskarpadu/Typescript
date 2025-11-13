"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoController = void 0;
const todo_1 = require("../models/todo");
class TodoController {
    constructor() {
        this.todos = [];
        this.createTodo = (req, res, next) => {
            try {
                const task = req.body.task;
                const newTodo = new todo_1.Todo(Math.random().toString(), task);
                this.todos.push(newTodo);
                res.status(201).json({
                    message: 'Todo created',
                    createdTask: newTodo
                });
            }
            catch (error) {
                console.log(error);
            }
        };
        this.getTodos = (req, res, next) => {
            try {
                res.status(201).json({
                    tasks: this.todos
                });
            }
            catch (error) {
                console.log(error);
            }
        };
        this.updateTodo = (req, res, next) => {
            try {
                const todoId = req.params.id;
                const updatedtask = req.body.task;
                const todoIndex = this.todos.findIndex(todo => todo.id === todoId);
                if (todoIndex < 0) {
                    throw new Error('Could not find todo');
                }
                this.todos[todoIndex] = new todo_1.Todo(this.todos[todoIndex].id, updatedtask);
                res.status(200).json({
                    message: 'Todo updated',
                    updatedTask: this.todos[todoIndex]
                });
            }
            catch (error) {
                console.log(error);
            }
        };
        this.deleteTodo = (req, res, next) => {
            try {
                const todoId = req.params.id;
                const todoIndex = this.todos.findIndex(todo => todo.id === todoId);
                if (todoIndex < 0) {
                    throw new Error('Could not find todo');
                }
                this.todos.splice(todoIndex, 1);
                res.status(201).json({
                    message: 'Todo deleted'
                });
            }
            catch (error) {
                console.log(error);
            }
        };
        this.createTodo = this.createTodo.bind(this);
        this.getTodos = this.getTodos.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }
}
exports.TodoController = TodoController;
