import { Router } from "express";
import { userRouter } from "./user.routes";
import { healthCheckRouter } from "./healthCheck.routes";

const router = Router();

router.use("/health-check", healthCheckRouter)
router.use("/users", userRouter);

export { router };