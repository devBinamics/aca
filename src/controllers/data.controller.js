export const getExampleData = async (req, res, next) => {
  try {
    const scope = req.headers['x-scope'];

    if (!scope) {
      return res.status(400).json({
        success: false,
        error: 'Header x-scope es requerido'
      });
    }

    if (scope.toLowerCase() === 'quequen') {
      const exampleData = {
        id: 10211875029,
        grano: "SOJA",
        turno: 20,
        descarga: 22,
        disponible: true,
        metadata: {
          createdAt: new Date(),
          updatedAt: new Date()
        }
      };

      return res.status(200).json({
        success: true,
        data: exampleData,
        message: 'Data scope: quequen'
      });
    }

    return res.status(404).json({
      success: false,
      data: null,
      message: `Sin data para scope: ${scope}`
    });

  } catch (error) {
    next(error);
  }
};