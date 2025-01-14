import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

export const getAllUsers = async () => {
    try{
        return prisma.user.findMany({include: {posts: true}});
    } catch (error) {
        console.log(error);
        throw new Error("Failed to create user");
    }
}

export const createUser = async ( name:string, password:string ) => {
    try{
        return prisma.user.create({
            data: {
                name,
                password
            }
        });
    } catch (error) {
        console.log(error);
        throw new Error("Failed to create user");
    }
}