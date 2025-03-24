import express from "express";
import userRouter from "@module/user/router.js";

const app = express();

app.use("/users", userRouter);

export default app;
