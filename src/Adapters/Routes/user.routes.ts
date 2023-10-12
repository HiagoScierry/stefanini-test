import { Router } from "express";
import { createUser, getAll, getUserById } from "../Controllers/UserController";

const userRouter = Router();

userRouter.get("/", getAll);
userRouter.get("/:id", getUserById);
userRouter.post("/" , createUser);

export { userRouter };