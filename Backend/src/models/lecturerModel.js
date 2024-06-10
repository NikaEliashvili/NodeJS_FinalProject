import mongoose from "mongoose";

const lecturerSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    personalID: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    DOB: {
      type: Date,
      required: true,
    },
    POB: {
      type: String,
      required: true,
    },
    userID: {
      type: String,
      unique: true,
    },
    mobileNum: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: true,
    },
    enrolledYear: {
      type: Number,
      required: true,
    },
    subjectID: {
      type: String,
      required: true,
    },
    sector: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    positionID: 2,
  },
  {
    timestamps: true,
  }
);

const Lecturers = mongoose.model("lecturer", lecturerSchema, "lecturers");

export default Lecturers;
