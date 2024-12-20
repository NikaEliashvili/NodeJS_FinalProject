import jwt from "jsonwebtoken";

const generateAccessToken = (userID) => {
  return jwt.sign({ userID }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1hr",
  });
};

const generateRefreshToken = (userID) => {
  return jwt.sign({ userID }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "1d",
  });
};

export { generateRefreshToken, generateAccessToken };
 