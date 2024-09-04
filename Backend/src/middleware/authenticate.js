import jwt from "jsonwebtoken";
import { createAccessTokenWithRefreshToken } from "../utils/createNewAccessToken.js";
const authenticate = async (req, res, next) => {
  const accessToken = req.cookies.accessToken || req.header("accessToken");
  const refreshToken = req.cookies.refreshToken || req.header("refreshToken");

  if (!accessToken) {
    if (!refreshToken) {
      return res.status(401).json({
        message: "No entry without auth",
      });
    }
    await createAccessTokenWithRefreshToken(req, res, refreshToken);
    next();
  } else {
    await jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        if (err.name === "TokenExpiredError" && refreshToken) {
          createAccessTokenWithRefreshToken(req, res, refreshToken);
          next();
        } else {
          return res.status(403).json({ message: "Invalid access token" });
        }
      } else {
        next();
      }
    });
  }
};

export { authenticate };
