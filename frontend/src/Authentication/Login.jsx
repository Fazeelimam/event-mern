// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
// import "../Design/Login.css";
// import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';

// export default function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const api = await fetch("http://localhost:2000/api/auth/login", {
//         method: "POST",
//         body: JSON.stringify({ email, password }),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         credentials: "include",
//       });

//       const response = await api.json();

//       if (api.ok) {
//         localStorage.setItem('jwt', response.token);  // Store JWT
//         toast.success("Login Successful! Welcome back.");

//         // Delay navigation to allow toast to show
//         setTimeout(() => {
//           navigate('/');
//         }, 1000);

//       } else {
//         toast.error(response.message || "Login failed. Please check your credentials.");
//       }

//     } catch (error) {
//       console.error("Error in Login:", error);
//       toast.error("Something went wrong during login.");
//     }
//   };

//   return (
//     <div className="login-page">
//       <div className="event-heading">Event Planning</div>

//       <div className="login-container">
//         <h2 className="page-title">Welcome Back!</h2>

//         <form onSubmit={handleLogin}>
//           <div className="input-group">
//             <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
//             <input
//               type="email"
//               placeholder="Enter your email"
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           <div className="input-group">
//             <FontAwesomeIcon icon={faLock} className="input-icon" />
//             <input
//               type="password"
//               placeholder="Enter your password"
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           <button type="submit">Back To Account</button>
//         </form>

//         <p className="login-link">
//           Don't have an account? <a href="/signup">Sign Up</a>
//         </p>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import "../Design/Login.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../Lib/axios.js";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post("/auth/login", {
        email,
        password,
      });

      // Store JWT token
      localStorage.setItem("jwt", response.data.token);
      toast.success("Login Successful! Welcome back.");

      // Delay navigation to allow toast to show
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      console.error("Error in Login:", error);
      toast.error(
        error.response?.data?.message ||
          "Login failed. Please check your credentials.",
      );
    }
  };

  return (
    <div className="login-page">
      <div className="event-heading">Event Planning</div>

      <div className="login-container">
        <h2 className="page-title">Welcome Back!</h2>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
            <input
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <FontAwesomeIcon icon={faLock} className="input-icon" />
            <input
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit">Back To Account</button>
        </form>

        <p className="login-link">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
}
