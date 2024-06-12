import Users from "../models/userModel.js";
import findUsersInCollection from "../utils/findUsersCollection.js";
import passwordCheck from "../validations/passwordCheck.js";
import {
  createAccessTokenCookie,
  createRefreshTokenCookie,
} from "../utils/cookieUtils.js";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../utils/generateToken.js";

async function signInController(req, res) {
  //checking user in usersCollection
  const { userID, password } = req.body;

  try {
    const foundUser = await Users.find({ userID });

    if (!foundUser.length) throw new Error("UserID isn't correct!");

    const isPasswordMatch = await passwordCheck(
      foundUser[0].password,
      password
    );

    if (!isPasswordMatch) throw new Error("Password do not match!");

    const foundUserData = await findUsersInCollection(
      foundUser[0],
      foundUser[0].positionID
    );

    if (!foundUserData.length) throw new Error("User not in the databases!");

    const accessToken = await generateAccessToken(userID);
    const refreshToken = await generateRefreshToken(userID);

    createAccessTokenCookie(res, accessToken);
    createRefreshTokenCookie(res, refreshToken);

    return res.status(200).send(foundUserData);
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: "Data retrieval failed",
      errors: error.message,
    });
  }
}

export { signInController };
