import { getUserByID } from "../utils/getUserByID.js";
const getUser = async (req, res) => {
  const { userID } = req.body;
  const user = await getUserByID(userID);
  return res.status(200).json({
    status: true,
    errors: null,
    data: { user },
  });
};
export { getUser };
