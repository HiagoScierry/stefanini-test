/* eslint-disable @typescript-eslint/no-unused-vars */
import { UserRepositoryInMemory } from "../../Adapters/Repository/InMemory/UserRepositoryInMemory";
import { IUserRepository, UserSchema } from "../../Adapters/Repository/Interfaces/IUserRepository";
import { GetAllUserUseCase } from "./GetAllUserUseCase";

describe("GetAllUserUseCase", () => {
    let getAllUserUseCase : GetAllUserUseCase;
    let userRepository : IUserRepository;

   beforeEach(() => {
       userRepository = new UserRepositoryInMemory();
       getAllUserUseCase = new GetAllUserUseCase(userRepository);
   });

    it("should return empty if no have user in repository", async () => {
        const users = await getAllUserUseCase.execute();

        expect(users).toHaveLength(0);
        expect(users).toEqual([]);
    });

    it("should return all users in repository", async () => {
        const user1: UserSchema = {
            name: "Hiago Moreira",
            age: 20,
            office: "Developer",
        };

        const user2: UserSchema = {
            name: "Alyne Leite",
            age: 20,
            office: "Designer",
        };

        userRepository.create(user1);
        userRepository.create(user2);


        const users = await getAllUserUseCase.execute();

        expect(users).toHaveLength(2);
        expect(users).toEqual(
            expect.arrayContaining([
                expect.objectContaining(user1),
                expect.objectContaining(user2),
            ])
        );


    });

});