import jwt from 'jsonwebtoken'

export default function verifyToken(req, res, next) {

    const token = req.headers.auth - token;
    if (!token) {
        return res.status(401).json({ message: 'Access denied!', success: false });
    }

    const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
    if (!verifyToken) {
        return res.status(401).json({ message: 'Access denied!', success: false });

    }
    const user = jwt.decode(token, process.env.JWT_SECRET);
    req.user = user;
    next();

}