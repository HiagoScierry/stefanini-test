/* eslint-disable @typescript-eslint/no-unused-vars */
import "dotenv/config";
import "reflect-metadata";
import { app } from "./app";

const port = process.env.APP_PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
