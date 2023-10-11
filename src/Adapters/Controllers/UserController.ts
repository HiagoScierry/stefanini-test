import { Request, Response } from "express";

export const getAll = async (request: Request, response: Response) => {
  return response.send("Hello World");
};
