import { Router } from "express";
import { healthCheckMiddleware } from "../Middleware/healthCheckMiddleware";

const healthCheckRouter = Router();

healthCheckRouter.get("/",  healthCheckMiddleware, (request, response) => {
  return response.send("Hello World");
});

export { healthCheckRouter };