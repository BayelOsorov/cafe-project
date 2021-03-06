import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const ProfilePage = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      {isAuthenticated ? (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ) : (
        <h2>Сначала авторизуйтесь</h2>
      )}
    </>
  );
};

export default ProfilePage;
