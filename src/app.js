import express from "express";
import "express-async-errors";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/index.js";
import handleApplicationErrors from "./middlewares/error.handling.middleware.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.use(handleApplicationErrors);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
