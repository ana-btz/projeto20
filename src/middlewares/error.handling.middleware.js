import httpStatus from "http-status";

export default function handleApplicationErrors(error, req, res, next) {
  console.log(error);

  if (error.type === "Conflict") {
    return res.status(httpStatus.CONFLICT).send(error.message);
  }

  return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
}
