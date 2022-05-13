import React from "react";
import LoginButton from "../components/Auth/LoginButton";
import LogoutButton from "../components/Auth/LogoutButton";

import Header from "../components/Home/Header";
import PopularFood from "../components/Home/PopularFood";
const Home = () => {
  return (
    <>
      <Header />
      <PopularFood />
      <LoginButton />
      <LogoutButton />
    </>
  );
};

export default Home;
