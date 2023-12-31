import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { dbConnect } from "./db/dbConnect";
import { productFinder, descriptionFinder } from "./routes/productRoutes";

const app = express();

app.use(cors());
app.use(bodyParser.json());

dbConnect();

app.use("/", productFinder);
app.use("/", descriptionFinder);

const port = 4000;
app.listen(4000, () => {
  console.log(`We're good to go at port:${port}!`);
});

// test
