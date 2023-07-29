import jwt from 'jsonwebtoken'

export default function verifyToken(req, res, next) {
    const cookies = req.headers.cookie;
    if (!cookies) {
        return res.status(401).json({ message: 'Access denied!', success: false });
    }

    // console.log(cookies.split(';')[0].split('=')[1]);
    const token = cookies.split(';')[0].split('=')[1]
    // const token = req.headers.authorization
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