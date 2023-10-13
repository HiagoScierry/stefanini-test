import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

export const healthCheck = async (request: Request, response: Response) => {
    try {
        const prisma = new PrismaClient();

        await prisma.$connect();
        await prisma.$disconnect();
        return response.status(200).json({ message: "OK" });
    } catch (error) {
        return response.status(500).json({ message: "Internal Server Error" });
    }
};
