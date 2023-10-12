import { PrismaClient } from "@prisma/client";
import { UserEntity } from "../../../Core/Entities/User";
import { IUserRepository, UserSchema } from "../Interfaces/IUserRepository";


export class PrismaUserRepository implements IUserRepository {

    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async all(): Promise<UserEntity[]> {
        return this.prisma.user.findMany();
    }

    async find(id: number): Promise<UserEntity> {
        const user = await this.prisma.user.findUnique({
            where: {
                id
            }
        });

        return user! ;
    }
    async create(data: UserSchema ): Promise<number> {
        const user = await this.prisma.user.create({
            data: {
                name: data.name,
                office: data.office,
                age: data.age
            }
        });

        return user.id;

    }

    async update(id: number, data: UserSchema): Promise<void> {
        await this.prisma.user.update({
            where: {
                id
            },
            data: {
                name: data.name,
                office: data.office,
                age: data.age
            }
        });
    }

    async delete(id: number): Promise<void> {
        await this.prisma.user.delete({
            where: {
                id
            }
        });
    }


}