import express from "express";
import { getEveryone } from "../controllers/admin/getUsers/getEveryone";
const router = express.Router();

router.get("/getEveryone", getEveryone);