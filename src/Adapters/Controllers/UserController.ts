import { Request, Response } from "express";
import { GetAllUserUseCase } from "../../Core/UseCases/GetAllUserUseCase";
import { PrismaUserRepository } from "../Repository/Prisma/PrismaUserRepository";

export const getAll = async (request: Request, response: Response) => {
    const getAllUserUseCase = new GetAllUserUseCase(new PrismaUserRepository());

    const users = await getAllUserUseCase.execute();

    return response.json(users);
};
