import { Router } from "express";
import itemsRouter from "./items.routes";

const routes = Router();

export default routes.use("/items", itemsRouter);
