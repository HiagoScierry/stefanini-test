import { Router } from "express";
import { createUser, deleteUser, getAll, getUserById, updateUser } from "../Controllers/UserController";

const userRouter = Router();

userRouter.get("/", getAll);
userRouter.get("/:id", getUserById);
userRouter.post("/" , createUser);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);

export { userRouter };