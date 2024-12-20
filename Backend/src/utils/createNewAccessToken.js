import jwt from "jsonwebtoken";
import { generateAccessToken } from "../utils/generateToken.js";
import { createAccessTokenCookie } from "../utils/cookieUtils.js";

const createAccessTokenWithRefreshToken = (req, res, refreshToken) => {
  return new Promise((resolve, reject) => {
    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      (err, decoded) => {
        if (err) {
          res.clearCookie("accessToken");
          res.clearCookie("refreshToken");
          return reject({ status: 403, message: "Invalid refresh token" });
        }

        const userID = decoded.userID;
        const accessToken = generateAccessToken(userID);

        createAccessTokenCookie(res, accessToken);
        resolve(accessToken);
      }
    );
  });
};

export { createAccessTokenWithRefreshToken };
