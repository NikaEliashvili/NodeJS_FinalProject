import bcrypt from "bcrypt";
import Students from "../../../models/studentModel.js";
import Users from "../../../models/userModel.js";
import Lecturers from "../../../models/lecturerModel.js";
import Admins from "../../../models/adminModel.js";

import { createUserByPosition } from "../../../utils/createUserByPosition.js";
import { generateID } from "../../../utils/generateUserID.js";
import { sendUserCodeToEmail } from "../../../utils/sendEmail.js";
import { adduserInAcademicRecordsCollection } from "../addUserInARC/addUserInARCcontroller.js";
import { generatePassword } from "../../../utils/generateUserPassword.js";
async function createUser(req, res) {
  const userInfo = req.body;
  if (req.body.positionID === 1) {
    const addedInARC = await adduserInAcademicRecordsCollection(
      userInfo,
      userInfo.subjects
    );
    if (addedInARC.error) {
      return res.status(addedInARC.error.status).json({
        status: "failed",
        message: addedInARC.error.message,
        errors: addedInARC.error.details || null,
      });
    }
  }
  try {
    await createUserByPosition(userInfo, userInfo.positionID);
    sendUserCodeToEmail(
      userInfo.email,
      userInfo.userID,
      generatePassword(userInfo.firstName),
      res
    );
    return res.status(201).json({
      status: "success",
      message: "User created successfully",
      data: {
        userID: userInfo.userID,
      },
      errors: null,
    });
  } catch (error) {
    const statusCode = error.message === "Passwords do not match!" ? 400 : 500;
    res.status(statusCode).json({
      status: "fail",
      message: "User creation failed",
      errors: error.message,
    });
  }
}

async function createStudent(userInfo) {
  userInfo.userID = await generateID(userInfo.positionID);
  userInfo.password = generatePassword(userInfo.firstName);
  userInfo.password = await bcrypt.hash(userInfo.password, 10);
  await Students.create(userInfo);
  createUserInUsers(userInfo);
}

async function createLecturer(userInfo) {
  userInfo.userID = await generateID(userInfo.positionID);
  userInfo.password = generatePassword(userInfo.firstName);
  userInfo.password = await bcrypt.hash(userInfo.password, 10);
  await Lecturers.create(userInfo);
  createUserInUsers(userInfo);
}

async function createAdmin(userInfo) {
  userInfo.userID = await generateID(userInfo.positionID);
  userInfo.password = generatePassword(userInfo.firstName);
  userInfo.password = await bcrypt.hash(userInfo.password, 10);
  await Admins.create(userInfo);
  createUserInUsers(userInfo);
}

//create user in usersCollection
async function createUserInUsers(userInfo) {
  await Users.create({
    userID: userInfo.userID,
    password: userInfo.password,
    positionID: userInfo.positionID,
  });
}

export { createStudent, createLecturer, createAdmin, createUser };
