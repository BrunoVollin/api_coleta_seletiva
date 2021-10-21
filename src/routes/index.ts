import { application, Router } from "express";
import itemsRouter from "./items.routes";
import locationsRouter from "./locations.routes";

const routes = Router();


routes.use("/items", itemsRouter);
routes.use("/loc", locationsRouter);

export default routes;
