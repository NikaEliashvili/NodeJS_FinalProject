import Students from "../../../models/studentModel.js";
import Lecturers from "../../../models/lecturerModel.js";
async function getEveryone(req, res) {
  try {
    const students = await Students.find();
    const lecturers = await Lecturers.find();

    return res.status(200).json({
      students,
      lecturers,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "An error occurred while fetching data" });
  }
}

export { getEveryone };
