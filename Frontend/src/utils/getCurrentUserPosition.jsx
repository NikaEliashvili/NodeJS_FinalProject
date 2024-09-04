import useCurrentUser from "@/store/currentUserStore";

export const getPostion = () => {
  const { currentUser } = useCurrentUser.getState();
  return { positionID: currentUser.positionID };
};
