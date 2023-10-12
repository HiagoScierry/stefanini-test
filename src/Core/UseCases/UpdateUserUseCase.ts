import { IUserRepository, UserSchema } from "../../Adapters/Repository/Interfaces/IUserRepository";

export class UpdateUserUseCase {
    private userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }
    
    async execute(id: number, data: UserSchema) {
        const user = await this.userRepository.find(id);
    
        if (!user) {
            throw new Error("User not found");
        }
    
        await this.userRepository.update(id, data);
    
    }
}