import jwt from 'jsonwebtoken'

export default function verifyToken(req, res, next) {
    const cookies = req.headers.cookie;
    
    if (!cookies) {
        return res.status(401).json({ message: 'Access denied!', success: false });
    }

    // console.log(cookies);
    const token = cookies.split(';')[0].split('=')[1]
    // const maxAge = cookies.split(';')[1].split('=')[1];
    // console.log(Date.now());
    // console.log(maxAge);
    // console.log(token);
    // if (Date.now() <= maxAge) {
    //     return res.status(401).json({ message: 'Seccion expired', success: false });
    // }
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