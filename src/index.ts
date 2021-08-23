//importing dependencies
import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import { router } from './routes/login';
import './controllers/LoginController';

//init server
const app = express();

//middlewares
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(
  cookieSession({
    keys: ['qcscsq'],
  })
);
app.use(router);

//listening
const PORT = 4000;
app.listen(PORT, () =>
  console.log(`listening on port ${PORT}, visit http://localhost:${PORT}`)
);
