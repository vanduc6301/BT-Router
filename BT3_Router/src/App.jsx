import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Profile from "./component/Profile";
import Setting from "./component/Setting";
import Dashboard from "./component/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="setting" element={<Setting />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
