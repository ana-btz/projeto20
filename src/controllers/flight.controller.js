import httpStatus from "http-status";

async function create(req, res) {
  const { origin, destination, date } = req.body;

  await flightService.create(origin, destination, date);
  res.sendStatus(httpStatus.CREATED);
}

export const flightController = { create };
