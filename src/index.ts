import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import * as helmet from "helmet";
import * as cors from "cors";
import routes from "./routes";

// Connect to mysql 5.7 db
createConnection()
  .then(async connection => {
    console.info('DB connected!!!');

    // Create express server
    const app = express();

    // call middlewares
    app.use(cors());
    app.use(helmet());

    app.use("/", routes);

    app.listen(3333, () => {
      console.info('Server started on port 3333!');
    })
  })
  .catch(error => console.error(error));