import { Request, Response, Router } from "express";
import knex, {Knex} from "knex";
import connection from '../database/connection';

const locationsRouter = Router();

export default locationsRouter.post(
  "/",
  async (req: Request, res: Response) => {
    console.log(req.body);
    const { image, name, email, whatsapp, latitude, longitude, city, uf, items } =
      req.body;

    const location = {
      image,
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
    };

    try {
      await connection(`locations`).insert(location);
			const newIds = await connection("locations").insert(location);
	
			const locationId = newIds[0];
	
			const locationItems = items.map((item_id: Number) => {
			  return { item_id, location_id: locationId };
			});
	
			await connection("location_items").insert(locationItems);
	
			return res.json({
			  id: locationId,
			  ...location,
			});
    } catch (error) {
      console.log(error);
			return res.json(error);
    }
  }
);
