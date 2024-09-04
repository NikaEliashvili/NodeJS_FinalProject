import jwt from "jsonwebtoken";
import { getUserByID } from "../utils/getUserByID.js";
const checkIfSignedIn = async (req, res) => {
  const accessToken = req.cookies.accessToken || req.header("accessToken");
  if (!accessToken) {
    return res.json({ status: false });
  }

  await jwt.verify(
    accessToken,
    process.env.ACCESS_TOKEN_SECRET,
    async (err, decoded) => {
      if (err) {
        return res.json({ status: false });
      }
      const user = await getUserByID(decoded.userID);
      return res.json({ status: true, user });
    }
  );
};
export { checkIfSignedIn };
