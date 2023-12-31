import { Router } from "express";
import passengersRouter from "./passenger.routes.js";
import cityRouter from "./city.routes.js";
import flightRouter from "./flight.routes.js";

const router = Router();

router.use(passengersRouter);
router.use(cityRouter);
router.use(flightRouter);

export default router;
