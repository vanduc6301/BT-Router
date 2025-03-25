import React, { use } from "react";
import { useNavigate } from "react-router";
const Login = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    localStorage.setItem("isLoginIn", "true");
    navigate("/");
  };
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Dang Nhap</button>
    </div>
  );
};

export default Login;
