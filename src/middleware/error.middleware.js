const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
      error: {
        message: err.message || 'Error interno del server',
        status: err.status || 500
      }
    });
  };
  
  export default errorHandler;