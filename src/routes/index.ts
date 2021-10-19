import { Router } from "express";

const routes = Router();

export default routes.get("/", (req, res) => {
  return res.json(`Olá galera 😂`);
});
