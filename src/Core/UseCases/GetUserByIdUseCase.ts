import { IUserRepository } from "../../Adapters/Repository/Interfaces/IUserRepository";

export class GetUserByIdUseCase {
    private userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    async execute(id: number) {
        return this.userRepository.find(id);
    }
}