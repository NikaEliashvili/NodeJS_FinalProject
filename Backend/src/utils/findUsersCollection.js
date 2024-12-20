// import { findUserInStudentColl } from "../controllers/signInController.js";
import Lecturers from "../models/lecturerModel.js";
import Admins from "../models/adminModel.js";
import Students from "../models/studentModel.js";

async function findUsersInCollection(foundUser, positionID) {
  var foundUserData;
  switch (positionID) {
    case 1:
      foundUserData = await findUserInStudentColl(foundUser.userID);
      break;

    case 2:
      foundUserData = await findUserInLectureColl(foundUser.userID);
      break;

    case 3:
      foundUserData = await findUserInAdmineColl(foundUser.userID);
      break;

    default:
      throw new Error("Invalid positionID");
  }
  return foundUserData;
}
  
async function findUserInStudentColl(userId) {
  const foundStudent = await Students.find({ userID: userId });
  return foundStudent;
}

async function findUserInLectureColl(userId) {
  const foundStudent = await Lecturers.find({ userID: userId });
  return foundStudent;
}
async function findUserInAdmineColl(userId) {
  const foundStudent = await Admins.find({ userID: userId });
  return foundStudent;
}

export default findUsersInCollection;
