import User from "../models/User.js";
import { hashPassword,verifyPassword } from "../utils/hash.js";
import generateToken from "../utils/generateToken.js";

export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body; 
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }   
        const hashedPassword = await hashPassword(password);
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();
        const token = generateToken(newUser);
        res.status(201).json({ token });
    }
    catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const isPasswordValid = await verifyPassword(user.password, password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const token = generateToken(user);
        res.status(200).json({ token });
    }
    catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};
