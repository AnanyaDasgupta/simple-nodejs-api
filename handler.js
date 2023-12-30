"use strict";

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello, your Node.js API on Lambda is working!",
      input: event,
    }),
  };
};
