import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login"; // Login page component
import Landing from "./pages/Landing"; // Landing page component

function App() {
  return (
    <div>
      {/* Navigation Links (you can remove or customize these links) */}
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/landing">Landing</Link>
          </li>
        </ul>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/landing" element={<Landing />} />{" "}
        {/* Route for landing page */}
      </Routes>
    </div>
  );
}

export default App;
