import * as cors from 'cors';
import * as express from 'express';
import * as helmet from 'helmet';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import routes from './routes';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
import { User, Idiom } from '../src/entity';

// Connect to mysql 5.7 db
createConnection({
  type: 'mysql',
  host: process.env.TYPEORM_HOST as string,
  port: parseInt(process.env.TYPEORM_PORT as string),
  username: process.env.TYPEORM_USERNAME as string,
  password: process.env.TYPEORM_PASSWORD as string,
  database: process.env.TYPEORM_DATABASE as string,
  entities: [User, Idiom],
  synchronize: true,
  logging: false,
})
  .then(async (connection) => {
    console.info('DB connected!!!');

    // Create express server
    const app = express();

    // call middlewares
    app.use(cors());
    app.use(helmet());

    app.use('/', routes);

    const port = process.env.PORT || 3333;
    app.listen(port, () => {
      console.info(`Server started on port ${port}!`);
    });
  })
  .catch((error) => console.error(error));
