import express from "express";
import { createUser } from "../controllers/admin/addUser/addUserController.js";
import { getEveryone } from "../controllers/admin/getUsers/getEveryone.js";
import { getUser } from "../controllers/getUser.js";
const router = express.Router();

router.get("/getEveryone", getEveryone);

router.post("/getUser", getUser);
router.post("/create", createUser);

export default router;
