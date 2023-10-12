/* eslint-disable @typescript-eslint/no-unused-vars */
import { UserRepositoryInMemory } from "../../Adapters/Repository/InMemory/UserRepositoryInMemory";
import { IUserRepository } from "../../Adapters/Repository/Interfaces/IUserRepository";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

describe("DeleteUserUseCase", () => {

    let userRepository: IUserRepository;
    let deleteUserUseCase: DeleteUserUseCase;

    beforeEach(() => {
        userRepository = new UserRepositoryInMemory();
        deleteUserUseCase = new DeleteUserUseCase(userRepository);
    });

    it("should be able to delete a user", async () => {
        const user = {
            name: "Hiago Moreira",
            age: 20,
            office: "Developer",
        };

        const userId = await userRepository.create(user);

        await deleteUserUseCase.execute(userId);

        const deletedUser = await userRepository.find(userId);
        const allUser = await userRepository.all();

        expect(deletedUser).toBeNull();
        expect(allUser).toHaveLength(0);
        expect(allUser).toEqual([]);

    });

    it("should not be able to delete a user that does not exist", async () => {
        await expect(deleteUserUseCase.execute(2))
            .rejects
            .toEqual(new Error("User not found"));
    });

});