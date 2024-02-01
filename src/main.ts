import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './routes';
const port = process.env.SERVER_PORT || 3000;
const morgan = require('morgan');
const config = require('config');
const enviroment  = config.get('enviroment');

var cors = require('cors');
const corsOption = config.get('cors');
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.use(morgan('dev'));
  app.use(cors(corsOption))
  await app.listen(port, () => {
    console.log(`Server is running on port ${port} in ${enviroment} mode`);
  });
}
bootstrap();
