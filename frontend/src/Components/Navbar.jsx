// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FaBars } from 'react-icons/fa';
// import { toast } from 'react-toastify';

// export default function Navbar() {
//   const [showMenu, setShowMenu] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem("jwt");
//     setIsLoggedIn(!!token);
//   }, []);

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);  // Toggle the menu visibility on smaller screens
//   };

//   const handleLogout = async () => {
//     try {
//       const response = await fetch("http://localhost:2000/api/auth/logout", {
//         method: "POST",
//         headers: { 'Content-Type': 'application/json' },
//         credentials: "include",
//       });

//       const data = await response.json();

//       if (response.ok) {
//         localStorage.removeItem('jwt');
//         setIsLoggedIn(false);  // update UI immediately
//         toast.success("Logged out successfully!");

//         // Delay navigation to allow toast to appear
//         setTimeout(() => {
//           navigate("/login");
//         }, 1500);

//       } else {
//         toast.error(data.message || "Logout failed");
//       }
//     } catch (error) {
//       toast.error("Something went wrong during logout.");
//     }
//   };

//   return (
//     <nav>
//       <div className="logo">MooDy's</div>

//       <div className="hamburger" onClick={toggleMenu}>
//         <FaBars />
//       </div>

//       <div className={`navLinks ${showMenu ? 'showmenu' : ''}`}>
//         <div className="links">
//           <Link to="/" onClick={toggleMenu}>Home</Link>
//           <Link to="/services" onClick={toggleMenu}>Services</Link>
//           <Link to="/about" onClick={toggleMenu}>About</Link>
//           <Link to="/contact" onClick={toggleMenu}>Contact</Link>

//           {/* Conditionally render Sign Up and Log In if the user is not logged in */}
//           {!isLoggedIn && (
//             <>
//               <Link to="/signup" onClick={toggleMenu}>Sign Up</Link>
//               <Link to="/login" onClick={toggleMenu}>Log In</Link>
//             </>
//           )}

//           {/* Render Logout button if the user is logged in */}
//           {isLoggedIn && (
//             <Link onClick={handleLogout} className="logout-btn">Logout</Link>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }
