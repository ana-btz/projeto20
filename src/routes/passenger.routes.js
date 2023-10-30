import { Router } from "express";
import { passengerSchema } from "../schemas/passenger.schema.js";
import { passengerController } from "../controllers/passenger.controller.js";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";

const passengersRouter = Router();

passengersRouter.post(
  "/passengers",
  validateSchema(passengerSchema),
  passengerController.create
);

export default passengersRouter;
