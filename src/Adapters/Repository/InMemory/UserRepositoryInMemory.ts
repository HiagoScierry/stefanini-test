import { UserEntity } from "../../../Core/Entities/User";
import { IUserRepository, UserSchema } from "../Interfaces/IUserRepository";

export class UserRepositoryInMemory implements IUserRepository {
    
    private id : number = 0;
    private users : UserEntity[] = [];
    
    async all(): Promise<UserEntity[]> {
        return this.users;
    }

    async find(id: number): Promise<UserEntity | null> {
        return this.users.find(user => user.id === id) || null;
    }

    async create(data: UserSchema): Promise<number> {
        const user: UserEntity = {
            id: this.id++,
            ...data
        };

        this.users.push(user);
        return user.id;
    }

    async update(id: number, data: UserSchema): Promise<void> {
        const user = await this.find(id);
        if (!user) {
            throw new Error("User not found");
        }

        Object.assign(user, data);
    }

    async delete(id: number): Promise<void> {
        const user = await this.find(id);
        if (!user) {
            throw new Error("User not found");
        }

        this.users = this.users.filter(user => user.id !== id);
    }

}