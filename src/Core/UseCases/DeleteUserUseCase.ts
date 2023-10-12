import { IUserRepository } from "../../Adapters/Repository/Interfaces/IUserRepository";

export class DeleteUserUseCase {
    private userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }
    
    async execute(id: number) {
        const user = await this.userRepository.find(id);
    
        if (!user) {
            throw new Error("User not found");
        }
    
        await this.userRepository.delete(id);
    
    }
}