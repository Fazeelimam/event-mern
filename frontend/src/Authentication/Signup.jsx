// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faEnvelope, faPhone, faLock } from '@fortawesome/free-solid-svg-icons';
// import "../Design/Signup.css";
// import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';

// export default function Signup() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [contact, setContact] = useState('');
//   const [password, setPassword] = useState('');

//   // Initialize navigate function
//   const navigate = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();

//     try {
//       const api = await fetch("http://localhost:2000/api/auth/signup", {
//         method: "POST",
//         body: JSON.stringify({ name, email, contact, password }),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         credentials: "include",
//       });

//       const response = await api.json();

//       if (api.ok) {
//         console.log("Signup Successfully", response);
//         toast.success("Signup Successfully! Please Login.");

//         // Use navigate to redirect to the login page
//         navigate("/login");
//       } else {
//         console.log("Signup failed", response.message);
//         toast.error(response.message || "Signup failed.");
//       }

//     } catch (error) {
//       console.log("Error in Signup ", error);
//       toast.error("Something went wrong during Signup.");
//     }
//   }

//   return (
//     <div className="signup-page">
//       <div className="event-heading">Event Planning</div>

//       <div className="signup-container">
//         <div className="create-account">
//           <h2>Create an Account</h2>
//         </div>

//         <form onSubmit={handleSignup}>
//           <div className="input-group">
//             <FontAwesomeIcon icon={faUser} className="input-icon" />
//             <input
//               type="text"
//               id="name"
//               name="name"
//               placeholder="Enter your name"
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           </div>

//           <div className="input-group">
//             <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Enter your email"
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           <div className="input-group">
//             <FontAwesomeIcon icon={faPhone} className="input-icon" />
//             <input
//               type="tel"
//               id="contact"
//               name="contact"
//               placeholder="Enter your contact number"
//               onChange={(e) => setContact(e.target.value)}
//               required
//             />
//           </div>

//           <div className="input-group">
//             <FontAwesomeIcon icon={faLock} className="input-icon" />
//             <input
//               type="password"
//               id="password"
//               name="password"
//               placeholder="Enter your password"
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           <button type="submit">Create Account</button>
//         </form>

//         <p className="login-link">
//           Already have an account? <a href="/login">Login</a>
//         </p>
//       </div>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faUser,
//   faEnvelope,
//   faPhone,
//   faLock,
// } from "@fortawesome/free-solid-svg-icons";
// import "../Design/Signup.css";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import { axiosInstance } from "../Lib/axios.js";

// export default function Signup() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [contact, setContact] = useState("");
//   const [password, setPassword] = useState("");

//   const navigate = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axiosInstance.post("/auth/signup", {
//         name,
//         email,
//         contact,
//         password,
//       });

//       console.log("Signup Successfully", response.data);
//       toast.success("Signup Successfully! Please Login.");

//       // Navigate to login page
//       navigate("/login");
//     } catch (error) {
//       console.log("Error in Signup", error);
//       toast.error(
//         error.response?.data?.message || "Something went wrong during Signup.",
//       );
//     }
//   };

//   return (
//     <div className="signup-page">
//       <div className="event-heading">Event Planning</div>

//       <div className="signup-container">
//         <div className="create-account">
//           <h2>Create an Account</h2>
//         </div>

//         <form onSubmit={handleSignup}>
//           <div className="input-group">
//             <FontAwesomeIcon icon={faUser} className="input-icon" />
//             <input
//               type="text"
//               id="name"
//               name="name"
//               placeholder="Enter your name"
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           </div>

//           <div className="input-group">
//             <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Enter your email"
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           <div className="input-group">
//             <FontAwesomeIcon icon={faPhone} className="input-icon" />
//             <input
//               type="tel"
//               id="contact"
//               name="contact"
//               placeholder="Enter your contact number"
//               onChange={(e) => setContact(e.target.value)}
//               required
//             />
//           </div>

//           <div className="input-group">
//             <FontAwesomeIcon icon={faLock} className="input-icon" />
//             <input
//               type="password"
//               id="password"
//               name="password"
//               placeholder="Enter your password"
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           <button type="submit">Create Account</button>
//         </form>

//         <p className="login-link">
//           Already have an account? <a href="/login">Login</a>
//         </p>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faPhone,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../Lib/axios.js";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post("/auth/signup", {
        name,
        email,
        contact,
        password,
      });

      console.log("Signup Successfully", response.data);
      toast.success("Signup Successfully! Please Login.");
      navigate("/login");
    } catch (error) {
      console.log("Error in Signup", error);
      toast.error(
        error.response?.data?.message || "Something went wrong during Signup.",
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
        <div>
          <h2 style={titleStyle}>Create an Account</h2>
        </div>

        <form onSubmit={handleSignup} style={formStyle}>
          <div style={inputGroupStyle}>
            <FontAwesomeIcon icon={faUser} style={iconStyle} />
            <input
              type="text"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
              style={inputStyle}
              required
            />
          </div>

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
            <FontAwesomeIcon icon={faPhone} style={iconStyle} />
            <input
              type="tel"
              placeholder="Enter your contact number"
              onChange={(e) => setContact(e.target.value)}
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
            Create Account
          </button>
        </form>

        <p style={linkStyle}>
          Already have an account?{" "}
          <a
            href="/login"
            style={{
              color: "#4E2A1E",
              textDecoration: "none",
              fontWeight: "500",
            }}
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
