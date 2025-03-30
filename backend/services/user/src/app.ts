import express from "express";
import userController from "#app/modules/user/controller.js";

console.log(process.env.POSTGRES_HOST);
console.log(Number(process.env.POSTGRES_PORT));
console.log(process.env.POSTGRES_DB);
console.log(process.env.POSTGRES_USER);
console.log(process.env.POSTGRES_PASSWORD);

const app = express();

app.use("/users", userController);

export default app;
