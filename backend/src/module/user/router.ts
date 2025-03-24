import express from "express";
import { createUser, getAllUsers } from "./controller.js";

const router = express.Router();

router.post("/", createUser);
router.get("/", getAllUsers);

export default router;
