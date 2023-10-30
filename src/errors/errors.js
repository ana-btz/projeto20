function conflict(message) {
  return {
    type: "ConflictError",
    message,
  };
}

function invalidData(message) {
  return {
    type: "InvalidDataError",
    message,
  };
}

export const errors = { conflict, invalidData };
