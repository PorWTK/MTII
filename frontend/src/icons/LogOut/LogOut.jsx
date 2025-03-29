import React from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api";

export const LogOut = ({ className }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await api.post("/user/logout"); // Call the logout API
      localStorage.removeItem("token"); // Clear auth token if stored
      navigate("/"); // Redirect to login page
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <svg
      className={`log-out ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
      onClick={handleLogout}
      style={{ cursor: "pointer" }}
    >
      <path
        className="path"
        d="M7.5 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H7.5M13.3333 14.1667L17.5 10M17.5 10L13.3333 5.83333M17.5 10H7.5"
        stroke="#667085"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.66667"
      />
    </svg>
  );
};