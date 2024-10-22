import express from 'express';
import cors from 'cors';
import apiRoutes from './routes/api.routes.js';
import errorHandler from './middleware/error.middleware.js';
import config from '../config/config.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', apiRoutes);

app.use(errorHandler);

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

app.listen(config.port, () => {
  console.log(`Servidor on port ${config.port}`);
});
