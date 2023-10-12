import { sum } from "./GetAllUserUseCase";

describe("GetAllUserUseCase", () => {
    it("should return 3 when sum 1 + 2", () => {
        const result = sum(1, 2);
        expect(result).toBe(3);
    });
});