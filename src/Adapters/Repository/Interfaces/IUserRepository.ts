import { UserEntity } from "../../../Core/Entities/User";

export type UserSchema  = {
    name: string;
    age: number;
    office: string;
}

export interface IUserRepository {

    // Get all users
    all(): Promise<UserEntity[]>;

    // Get user by id
    find(id: number): Promise<UserEntity | null>;

    // Create user
    create(data: UserSchema): Promise<number>;

    // Update user
    update(id: number, data: UserSchema): Promise<void>;

    // Delete user
    delete(id: number): Promise<void>;

}