import useCurrentUser from "@/store/currentUserStore";

export const getPostion = () => {
  const { currentUser } = useCurrentUser.getState();
  console.log(currentUser);

  return { positionID: currentUser.positionID };
};
