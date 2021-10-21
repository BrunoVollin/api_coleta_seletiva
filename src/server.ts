import express from "express";
import path from "path";
import routes from "./routes";

const app = express();
const port = 3000;

app.use(express.json());
app.use(routes);
app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!😂`));
