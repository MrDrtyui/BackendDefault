import express from 'express';
import {PrismaClient} from '@prisma/client';
import testRouter from "./routes/testRouter";
import {authMiddleware} from "./middleware/authMiddleware";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.use(authMiddleware)

app.use('/test', testRouter);

app.get('/', (req, res) => {
    res.send('Hello!');
})

export default app;