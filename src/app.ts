import express, { Request, Response, NextFunction } from 'express';
import { json } from 'body-parser';

import todoRoutes from './routes/todos.js';

const app = express();

app.use(json());

app.use('/todos', todoRoutes);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ message: error.message });
});

app.listen(3011, () => {
    console.log('Server is running on port 3011');
});