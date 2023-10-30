function conflict(message) {
  return {
    type: "Conflict",
    message,
  };
}

function invalidData(message) {
  return {
    type: "InvalidData",
    message,
  };
}

function notFound(message) {
  return {
    type: "NotFound",
    message,
  };
}

export const errors = { conflict, invalidData, notFound };
