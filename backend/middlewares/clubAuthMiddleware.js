const jwt = require('jsonwebtoken');

// middleware to authenticate club members
const clubAuthMiddleware = (req, res, next) =>{
    try{
        const token = req.header('Authorization').replace('Bearer ', '');
        if(!token) return res.status(401).json({message: "Access denied. No token provided."});

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        req.memberId = decoded.id;
        req.role = decoded.role;
        req.clubId = decoded.clubId;

        next();
    }catch(error){
        res.status(401).json({message: "Invalid or expired token."});
    }
};

module.exports = clubAuthMiddleware;