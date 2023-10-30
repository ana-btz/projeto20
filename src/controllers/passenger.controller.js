import { passengerService } from "../services/passenger.service.js";

async function create(req, res) {
  const { firstName, lastName } = req.body;

  await passengerService.create(firstName, lastName);

  res.sendStatus("CREATED");
}

export const passengerController = {
  create,
};
