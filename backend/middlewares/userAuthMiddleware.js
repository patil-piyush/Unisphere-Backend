const jwt = require('jsonwebtoken');

const userAuthMiddleware = (req, res, next) => {
    try{
        const token = req.cookies.token;
        if(!token) return res.status(401).json({message: "Access denied. No token provided."});

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.userId = decoded.id;
        next();
    }catch(error){
        res.status(401).json({message: "Invalid or expired token."});
    }
}
const adminOnly = (req, res, next) => {
    if(req.userRole !== 'admin'){
        return res.status(403).json({message: "Access denied. Admins only."});
    }
    next();
}
module.exports = {
    userAuthMiddleware,
    adminOnly
}