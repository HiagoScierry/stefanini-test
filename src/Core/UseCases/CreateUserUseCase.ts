import { IUserRepository, UserSchema } from "../../Adapters/Repository/Interfaces/IUserRepository";

export class CreateUserUseCase {
    userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }
    
    async execute(data: UserSchema) {
        const userId = await this.userRepository.create(data);
        return userId;
    }
}