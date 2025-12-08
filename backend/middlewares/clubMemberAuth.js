const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) return res.status(401).json({ message: "Unauthorized: No token" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.type !== "member") {
      return res.status(403).json({ message: "Forbidden: Member access only" });
    }

    req.memberId = decoded.memberId;
    req.clubId = decoded.clubId;
    req.role = decoded.role; // member
    next();

  } catch (err) {
    res.status(401).json({ message: "Invalid or expired token" });
  }
};
