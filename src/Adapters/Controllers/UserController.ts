import { Request, Response } from "express";
import { GetAllUserUseCase } from "../../Core/UseCases/GetAllUserUseCase";
import { PrismaUserRepository } from "../Repository/Prisma/PrismaUserRepository";
import { GetUserByIdUseCase } from "../../Core/UseCases/GetUserByIdUseCase";
import { CreateUserUseCase } from "../../Core/UseCases/CreateUserUseCase";
import { UserSchemaValid } from "../../Core/Schemas/User";
import { UpdateUserUseCase } from "../../Core/UseCases/UpdateUserUseCase";
import { DeleteUserUseCase } from "../../Core/UseCases/DeleteUserUseCase";

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

    const { error } = UserSchemaValid.validate(request.body);

    if(error) {
        return response.status(400).json({
            message: error.message,
            error: error.details,
        });
    }

    const createUserUseCase = new CreateUserUseCase(new PrismaUserRepository());

    const userId = await createUserUseCase.execute(request.body);

    return response.status(201).json({ id: userId });
};


export const updateUser = async (request: Request, response: Response) => {
    const { id } = request.params;

    const { error } = UserSchemaValid.validate(request.body);

    if(error) {
        return response.status(400).json({
            message: error.message,
            error: error.details,
        });
    }

    const updateUserUseCase = new UpdateUserUseCase(new PrismaUserRepository());

    const userId = await updateUserUseCase.execute(parseInt(id), request.body);

    return response.status(201).json({ id: userId });
};


export const deleteUser = async (request: Request, response: Response) => {
    const { id } = request.params;

    const deleteUserUseCase = new DeleteUserUseCase(new PrismaUserRepository());

    await deleteUserUseCase.execute(parseInt(id));

    return response.status(201).json({ message: "User deleted" });
};