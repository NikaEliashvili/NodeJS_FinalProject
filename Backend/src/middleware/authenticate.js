import jwt from "jsonwebtoken";
import { createAccessTokenWithRefreshToken } from "../utils/createNewAccessToken.js";

const authenticate = async (req, res, next) => {
  let accessToken = req.cookies.accessToken || req.header("accessToken");
  const refreshToken = req.cookies.refreshToken || req.header("refreshToken");
  
  try {
    if (!accessToken) {
      if (!refreshToken) {
        return res.status(401).json({
          message: "No entry without auth",
        });
      }  
      accessToken = await createAccessTokenWithRefreshToken(req, res, refreshToken);
      if (!accessToken) {
        return res.status(403).json({ message: "Failed to create access token" });
      }

      req.cookies.accessToken = accessToken; 
    }
    jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: "Invalid access token" });
      }
      req.user = decoded;
      next();
    });

  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message || "Internal Server Error" });
  }
};

export { authenticate };
