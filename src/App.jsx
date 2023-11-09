import React from "react";
import Header from "./sections/header/Header";
import Navbar from "./sections/navbar/Navbar";
import Button from "./components/button/Button";
import Login from "./pages/login/Login";
import SignUp from "./sections/sign-up/SignUp";
import { useSelector } from "react-redux";

function App() {
  const login = useSelector((state) => state.login);

  console.log(login);

  return (
    <div>
      <Header />
      <Navbar />
      {!login.isLoggedIn && <SignUp />}
    </div>
  );
}

export default App;
