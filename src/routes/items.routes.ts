import { Router } from "express";
import connection from "../database/connection";

const itemsRouter = Router();

export default itemsRouter.get("/", async (req, res) => {
  const items = await connection("items").select("*");
  const serializedItems = items.map((item) => {
    return { ...item, image: `http://localhost:3000/uploads/${item.image}` };
  });
  return res.json(serializedItems);
});
