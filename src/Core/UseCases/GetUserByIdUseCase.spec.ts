/* eslint-disable @typescript-eslint/no-unused-vars */
import { UserRepositoryInMemory } from "../../Adapters/Repository/InMemory/UserRepositoryInMemory";
import { IUserRepository } from "../../Adapters/Repository/Interfaces/IUserRepository";
import { GetUserByIdUseCase } from "./GetUserByIdUseCase";

describe("GetUserByIdUseCase", () => { 

    let getUserByIdUseCase : GetUserByIdUseCase;
    let userRepository : IUserRepository;

    beforeEach(() => {
        userRepository = new UserRepositoryInMemory();
        getUserByIdUseCase = new GetUserByIdUseCase(userRepository);
    });

    it("should return null if user not found", async () => {
        const user = await getUserByIdUseCase.execute(1);

        expect(user).toBeNull();
    });

    it("should return user if user found", async () => {
        const user = {
            name: "Hiago Moreira",
            age: 20,
            office: "Developer",
        };

        const id = await userRepository.create(user);

        const userFound = await getUserByIdUseCase.execute(id);

        expect(userFound).toEqual(
            expect.objectContaining(user)
        );
    });

});