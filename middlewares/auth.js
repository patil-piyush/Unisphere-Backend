const JWT = require('jsonwebtoken');


function verifyToken(req, res, next){
    try {
        const token = req.signedCookies.token;
        console.log('Signed Cookies:', req.signedCookies);

        if(!token){
            return res.status(401).json({error: "Access Denied. No Token Provided!"});
        }

        const decoded = JWT.verify(token, process.env.SECRET_KEY);
        console.log(decoded);
        req.user = decoded;
        next();
    } catch (error) {
        console.error("Token verification failed", error);
        return res.status(401).json({ error: "Invalid or Expired Token!"});
    }
}


module.exports = {
    verifyToken,
}