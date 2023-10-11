import { Router } from "express";
import { getAll } from "../Controller/UserController";

const userRouter = Router();

userRouter.get("/", getAll);

export { userRouter };