import React from "react";
import { Link, Outlet } from "react-router";

const Dashboard = () => {
  return (
    <div>
      <h1>Trang Dashdoard</h1>
      <nav>
        <ul>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/setting">Setting</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default Dashboard;
