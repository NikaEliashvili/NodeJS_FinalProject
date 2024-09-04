import Students from "../models/studentModel.js";
import Lecturers from "../models/lecturerModel.js";
import Admins from "../models/adminModel.js";
export const getUserByID = async (id) => {
  var user;

  if (parseInt(id[2]) === 1) {
    user = await Students.findOne({ userID: id });
  } else if (parseInt(id[2]) === 2) {
    user = await Lecturers.findOne({ userID: id });
  } else {
    user = await Admins.findOne({ userID: id });
  }

  
  return user;
};
