import { Request, Response, NextFunction } from "express";

export const healthCheckMiddleware = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
    const authorization = request.headers.authorization;

    if(authorization !== process.env.AUTH_HEALTH_CHECK) {
        return response.status(401).json({ message: "Unauthorized" });
    }

    return next();
};