import Messages from "../model/message.js";

export const sendMessages = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Check if all required fields are provided
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Validate subject length
    if (subject.length < 5) {
      return res.status(400).json({
        success: false,
        message: "Subject must be at least 5 characters long",
      });
    }

    // Validate message length
    if (message.length < 10) {
      return res.status(400).json({
        success: false,
        message: "Message must be at least 10 characters long",
      });
    }

    // Save the message to the database
    await Messages.create({ name, email, subject, message });

    return res.status(200).json({
      success: true,
      message: "Message Sent Successfully!",
    });
  } catch (error) {
    console.error("Error in sendMessages:", error);

    // Specific error handling for validation
    if (error.name === 'ValidationError') {
      return res.status(400).json({
        success: false,
        message: error.message || "Validation failed",
      });
    }

    // General error handling
    return res.status(500).json({
      success: false,
      error: error.message || "Something went wrong",
    });
  }
};
