import express from "express";
import cors from "cors";
import { router } from "./Adapters/Routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);



export { app };
