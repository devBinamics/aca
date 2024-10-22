import dotenv from 'dotenv';

dotenv.config();

const config = {
  token: process.env.TOKEN,
  port: process.env.PORT || 3000
};

export default config;