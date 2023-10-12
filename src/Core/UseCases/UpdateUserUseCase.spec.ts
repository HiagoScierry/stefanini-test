/* eslint-disable @typescript-eslint/no-unused-vars */
import { UserRepositoryInMemory } from "../../Adapters/Repository/InMemory/UserRepositoryInMemory";
import { IUserRepository, UserSchema } from "../../Adapters/Repository/Interfaces/IUserRepository";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

describe("UpdateUserUseCase", () => {

    let userRepository: IUserRepository;
    let updateUserUseCase: UpdateUserUseCase;

    beforeEach(() => {
        userRepository = new UserRepositoryInMemory();
        updateUserUseCase = new UpdateUserUseCase(userRepository);
    });

    it("should be able to update a user", async () => {
        const user: UserSchema = {
            name: "Hiago Moreira",
            age: 20,
            office: "Developer",
        };

        const userToUpdate: UserSchema = {
            name: "Hiago Carlos Moreira",
            age: 24,
            office: "Developer",
        };

        const userId = await userRepository.create(user);

        await updateUserUseCase.execute(userId, userToUpdate);

        const updatedUser = await userRepository.find(userId);


        expect(updatedUser).toHaveProperty("name", "Hiago Carlos Moreira");
        expect(updatedUser).toHaveProperty("age", 24);
        expect(updatedUser).toHaveProperty("office", "Developer");

    });

});
