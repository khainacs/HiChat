// backend/middlewares/authMiddleware.js
import jwt from 'jsonwebtoken';

export const authenticate = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Extract token from header

    if (!token) {
        return res.status(403).json({ message: "No token provided." });
    }

    jwt.verify(token, 'YOUR_SECRET_KEY', (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Invalid token." });
        }
        req.userId = decoded.id; // Attach user ID to request
        next();
    });
};
