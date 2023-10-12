/* eslint-disable @typescript-eslint/no-unused-vars */
import { UserRepositoryInMemory } from "../../Adapters/Repository/InMemory/UserRepositoryInMemory";
import { IUserRepository } from "../../Adapters/Repository/Interfaces/IUserRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";

describe("CreateUserUseCase", () => {

    let createUserUseCase : CreateUserUseCase;
    let userRepository : IUserRepository;

    beforeEach(() => {
        userRepository = new UserRepositoryInMemory();
        createUserUseCase = new CreateUserUseCase(userRepository);
    });

    it("should return id of user created", async () => {
        const user = {
            name: "Hiago Moreira",
            age: 20,
            office: "Developer",
        };

        const userId = await createUserUseCase.execute(user);

        expect(userId).toBeDefined();
    });



});