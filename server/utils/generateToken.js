import  Jwt from "jsonwebtoken";


const generateToken = (user) => {
    return Jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
}

export default generateToken;