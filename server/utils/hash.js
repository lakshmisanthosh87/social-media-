import argon2 from "argon2";

export const hashPassword = async (password) => {
    try {
        const hash = await argon2.hash(password);
        return hash;
    } catch (error) {
        throw new Error("Password hashing failed");
    }
};

export const verifyPassword = async (hash, password) => {
    try {
        return await argon2.verify(hash, password);
    } catch (error) {
        throw new Error("Password verification failed");
    }
};