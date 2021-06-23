//importing dependencies
import express from 'express';
import { router } from './routes/login';
import bodyParser from 'body-parser';

//init server
const app = express();

//middlewares
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(router);

//listening
const PORT = 4000;
app.listen(PORT, () =>
  console.log(`listening on port ${PORT}, visit http://localhost:${PORT}`)
);
