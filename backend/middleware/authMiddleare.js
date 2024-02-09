// backend/middleware/authMiddleware.js
import { verifyToken } from '../utils/jwt.js';

const authMiddleware = (requiredRole) => {
  return (req, res, next) => {
    // Get the token from the request headers
    const token = req.headers.authorization;
console.log(token);
    // Check if the token is provided
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized - Token not provided' });
    }

    try {
      // Verify the token
      const decodedToken = verifyToken(token);
console.log('====================================');
console.log(decodedToken);
console.log('====================================');
      // Check if the user has the required role
      if (decodedToken.role !== requiredRole) {
        return res.status(403).json({ error: 'Forbidden - Insufficient privileges' });
      }

      // Attach the decoded token to the request for further use
      req.user = decodedToken;

      // Continue to the next middleware or route handler
      next();
    } catch (error) {
      return res.status(401).json({ error: 'Unauthorized - Invalid token' });
    }
  };
};

export default authMiddleware;
