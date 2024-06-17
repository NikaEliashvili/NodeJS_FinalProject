import express from "express";
import { createUser } from "../controllers/admin/addUser/addUserController.js";
const router = express.Router();

router.post("/create", createUser);

export default router;
