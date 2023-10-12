import { Request, Response } from "express";
import { GetAllUserUseCase } from "../../Core/UseCases/GetAllUserUseCase";
import { PrismaUserRepository } from "../Repository/Prisma/PrismaUserRepository";
import { GetUserByIdUseCase } from "../../Core/UseCases/GetUserByIdUseCase";
import { CreateUserUseCase } from "../../Core/UseCases/CreateUserUseCase";

export const getAll = async (request: Request, response: Response) => {
    const getAllUserUseCase = new GetAllUserUseCase(new PrismaUserRepository());

    const users = await getAllUserUseCase.execute();

    return response.json(users);
};

export const getUserById = async (request: Request, response: Response) => {
    const { id } = request.params;

    const getUserByIdUseCase = new GetUserByIdUseCase(new PrismaUserRepository());

    const user = await getUserByIdUseCase.execute(parseInt(id));

    if(!user) {
        return response.status(404).json({ message: "User not found" });
    }

    return response.json(user);
};

export const createUser = async (request: Request, response: Response) => {
    const { name, age, office } = request.body;

    const createUserUseCase = new CreateUserUseCase(new PrismaUserRepository());

    const userId = await createUserUseCase.execute({
        name,
        age,
        office,
    });

    return response.status(201).json({ id: userId });
};

