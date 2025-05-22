import mongoose from "mongoose";
import validator from "validator";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    contact: {
        type: String,
        required: [true, "Contact number is required"],
        validate: {
            validator: (val) => validator.isMobilePhone(val, 'any', { strictMode: false }),
            message: "Please provide a usable phone number"
        }
    }
}, {
    timestamps: true
});

const User = mongoose.model("User", UserSchema);
export default User;
