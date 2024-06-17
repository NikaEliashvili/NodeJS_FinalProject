import express from "express";
import { authenticate } from "../middleware/authenticate.js";
import adminCreateUserRoutes from "./createUser.js";
import signInUserRoutes from "./signInUsers.js";
import subjectsRoutes from "./subjects.js";
import academicRecordsRoutes from "./academicRecord.js";
import gradesUpdateRoutes from "./gradeUpdate.js";
import { checkIfSignedIn } from "../controllers/checkIfSignedIn.js";
import { logoutController } from "../controllers/logoutController.js";
const router = express.Router();

router.use("/admin", authenticate, adminCreateUserRoutes);
router.use("/signin", signInUserRoutes);
router.use("/subjects", subjectsRoutes);
router.use("/academicRecords", academicRecordsRoutes);
router.use("/lecturer", gradesUpdateRoutes);
router.get("/auth/status", authenticate, checkIfSignedIn);
router.get("/logout", logoutController);
export default router;