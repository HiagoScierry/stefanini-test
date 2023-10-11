import { Router } from "express";
import { getAll } from "../Controllers/UserController";

const userRouter = Router();

userRouter.get("/", getAll);

export { userRouter };