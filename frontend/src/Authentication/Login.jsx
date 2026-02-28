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

// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
// import "../Design/Login.css";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import { axiosInstance } from "../Lib/axios.js";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axiosInstance.post("/auth/login", {
//         email,
//         password,
//       });

//       // Store JWT token
//       localStorage.setItem("jwt", response.data.token);
//       toast.success("Login Successful! Welcome back.");

//       // Delay navigation to allow toast to show
//       setTimeout(() => {
//         navigate("/");
//       }, 1000);
//     } catch (error) {
//       console.error("Error in Login:", error);
//       toast.error(
//         error.response?.data?.message ||
//           "Login failed. Please check your credentials.",
//       );
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

      localStorage.setItem("jwt", response.data.token);
      toast.success("Login Successful! Welcome back.");

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

  const pageStyle = {
    minHeight: "100vh",
    width: "100%",
    background: "url(/images/restaurant.jpg) no-repeat center center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px 20px",
    position: "relative",
    fontFamily: "'Poppins', sans-serif",
  };

  const headingStyle = {
    position: "absolute",
    top: "40px",
    fontSize: "48px",
    fontFamily: "'Great Vibes', cursive",
    color: "#ffffff",
    textShadow: "2px 2px 6px rgba(255, 255, 255, 0.5)",
    zIndex: 1,
  };

  const containerStyle = {
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    padding: "30px 25px",
    borderRadius: "20px",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    width: "100%",
    maxWidth: "380px",
    textAlign: "center",
    color: "#4E2A1E",
  };

  const titleStyle = {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#4E2A1E",
    marginBottom: "20px",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  };

  const inputGroupStyle = {
    position: "relative",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 12px 12px 40px",
    border: "none",
    borderRadius: "10px",
    background: "rgba(255, 255, 255, 0.8)",
    color: "#4E2A1E",
    fontSize: "14px",
    boxSizing: "border-box",
  };

  const iconStyle = {
    position: "absolute",
    left: "12px",
    top: "50%",
    transform: "translateY(-50%)",
    color: "#4E2A1E",
    fontSize: "16px",
  };

  const buttonStyle = {
    padding: "12px",
    backgroundColor: "#FFD699",
    color: "#4E2A1E",
    fontSize: "16px",
    border: "none",
    borderRadius: "10px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
  };

  const linkStyle = {
    marginTop: "15px",
    fontSize: "14px",
    color: "#4E2A1E",
  };

  return (
    <div style={pageStyle}>
      <div style={headingStyle}>Event Planning</div>

      <div style={containerStyle}>
        <h2 style={titleStyle}>Welcome Back!</h2>

        <form onSubmit={handleLogin} style={formStyle}>
          <div style={inputGroupStyle}>
            <FontAwesomeIcon icon={faEnvelope} style={iconStyle} />
            <input
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
              required
            />
          </div>

          <div style={inputGroupStyle}>
            <FontAwesomeIcon icon={faLock} style={iconStyle} />
            <input
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
              required
            />
          </div>

          <button type="submit" style={buttonStyle}>
            Back To Account
          </button>
        </form>

        <p style={linkStyle}>
          Don't have an account?{" "}
          <a
            href="/signup"
            style={{
              color: "#4E2A1E",
              textDecoration: "none",
              fontWeight: "500",
            }}
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
