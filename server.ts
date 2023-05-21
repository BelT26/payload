require("dotenv").config();
import express from "express";
import payload from "payload";

const app = express();

const start = async () => {
  await payload.init({
    secret: "SECRET_KEY",
    mongoURL: "mongodb://localhost/payload",
    express: app,
  });

  app.listen(3000, async () => {
    console.log(
      "Express is now listening for incoming connections on port 3000."
    );
  });
};

start();
