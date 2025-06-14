import React, { useContext } from "react";
import UserContext from "../context/ContextApi";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) return <div>Plesase Login</div>;

  return <div>Welcome {user.username}</div>;
};

export default Profile;
