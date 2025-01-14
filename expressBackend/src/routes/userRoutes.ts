import {Router} from 'express';
import {getUsers, createUserController} from '../controllers/usersController';

const userRouter = Router();

userRouter.get('/', getUsers);
userRouter.post('/', createUserController);

export default userRouter;