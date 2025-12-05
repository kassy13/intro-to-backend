import express from 'express';
import userRoutes from './route/user.route.js';

const app = express(); //create an express app

app.use(express.json());

//import routes

//mount routes
app.use('/api/v1/users', userRoutes);

//example route :localhost:4000/api/v1/users

export default app