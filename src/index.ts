import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import * as helmet from "helmet";
import * as cors from "cors";
require("dotenv").config();
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

    const port = process.env.PORT || 3333
    app.listen(port, () => {
      console.info(`Server started on port ${port}!`);
    })
  })
  .catch(error => console.error(error));