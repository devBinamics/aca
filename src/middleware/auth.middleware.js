const authMiddleware = (req, res, next) => {
    try {
      const authHeader = req.headers.authorization;

  
      if (!authHeader) {
        return res.status(401).json({
          success: false,
          error: 'No se proporcionó token de autorización'
        });
      }
  
      const [bearer, token] = authHeader.split(' ');
      
      if (bearer !== 'Bearer' || !token) {
        return res.status(401).json({
          success: false,
          error: 'Formato de token inválido'
        });
      }
  
      if (token !== process.env.TOKEN) {
        return res.status(401).json({
          success: false,
          error: 'Token no válido',
          debug: {
            receivedToken: token,
            expectedToken: process.env.TOKEN
          }
        });
      }
  
      next();
    } catch (error) {
      next(error);
    }
  };
  
  export default authMiddleware;