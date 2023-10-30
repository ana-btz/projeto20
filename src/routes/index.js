import { Router } from "express";
import passengersRouter from "./passenger.routes.js";
import cityRouter from "./city.routes.js";

const router = Router();

router.use(passengersRouter);
router.use(cityRouter);

export default router;
