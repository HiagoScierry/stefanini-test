import { Router } from "express";
import { getAll, getUserById } from "../Controllers/UserController";

const userRouter = Router();

userRouter.get("/", getAll);
userRouter.get("/:id", getUserById);

export { userRouter };