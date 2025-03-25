import React, { useEffect } from "react";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isloggedIn");
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, []);
  return (
    <div>
      <h1>Chao Mung ban den voi Page Home :</h1>
    </div>
  );
};

export default Home;
