import express from 'express';
import {authMiddleware} from "./middleware/authMiddleware";
import userRouter from "./routes/userRoutes";

const app = express();

app.use(express.json());

app.use(authMiddleware)

app.use('/user', userRouter);

app.get('/', (_, res) => {
    res.send('Hello!');
})

export default app;