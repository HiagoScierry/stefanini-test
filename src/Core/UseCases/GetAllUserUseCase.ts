// import { IUserRepository } from "../../Adapters/Repository/Interfaces/IUserRepository";

// export class GetAllUserUseCase {
//     private userRepository : IUserRepository;

//     constructor(userRepository : IUserRepository) {
//         this.userRepository = userRepository;
//     }

//     async execute() {
//         return  this.userRepository.all();
//     }
// }

export const sum = (a: number, b: number) => {
    return a + b;
};