import jwt from "jsonwebtoken";

export const GenerateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "20d",
  });

  console.log("Generated Token:", token);  // Log the token for debugging

  res.cookie("jwt", token, {
    httpOnly: true,  // Cookie can only be accessed by the server
    secure: process.env.NODE_ENV === "production", // Secure cookie only in production
    sameSite: "strict",  // Cookie sent only with requests from the same site
    domain: "localhost",  // Explicit domain for local dev
    maxAge: 20 * 24 * 60 * 60 * 1000,  // Cookie expiry time (20 days)
  });

  console.log("JWT cookie set");
};
