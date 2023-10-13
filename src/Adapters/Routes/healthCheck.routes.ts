import { Router } from "express";
import { healthCheckMiddleware } from "../Middlewares/healthCheckMiddleware";
import { healthCheck } from "../Controllers/HealthCheckController";

const healthCheckRouter = Router();

healthCheckRouter.get("/",  healthCheckMiddleware, healthCheck);

export { healthCheckRouter };