import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faLock } from '@fortawesome/free-solid-svg-icons';
import "../Design/Signup.css";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');
  
  // Initialize navigate function
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const api = await fetch("http://localhost:2000/api/auth/signup", {
        method: "POST",
        body: JSON.stringify({ name, email, contact, password }),
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: "include",
      });

      const response = await api.json();

      if (api.ok) {
        console.log("Signup Successfully", response);
        toast.success("Signup Successfully! Please Login.");
        
        // Use navigate to redirect to the login page
        navigate("/login");
      } else {
        console.log("Signup failed", response.message);
        toast.error(response.message || "Signup failed.");
      }

    } catch (error) {
      console.log("Error in Signup ", error);
      toast.error("Something went wrong during Signup.");
    }
  }

  return (
    <div className="signup-page">
      <div className="event-heading">Event Planning</div>

      <div className="signup-container">
        <div className="create-account">
          <h2>Create an Account</h2>
        </div>

        <form onSubmit={handleSignup}>
          <div className="input-group">
            <FontAwesomeIcon icon={faUser} className="input-icon" />
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </div>

          <div className="input-group">
            <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Enter your email" 
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>

          <div className="input-group">
            <FontAwesomeIcon icon={faPhone} className="input-icon" />
            <input 
              type="tel" 
              id="contact" 
              name="contact" 
              placeholder="Enter your contact number" 
              onChange={(e) => setContact(e.target.value)} 
              required 
            />
          </div>

          <div className="input-group">
            <FontAwesomeIcon icon={faLock} className="input-icon" />
            <input 
              type="password" 
              id="password" 
              name="password" 
              placeholder="Enter your password" 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>

          <button type="submit">Create Account</button>
        </form>

        <p className="login-link">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}
