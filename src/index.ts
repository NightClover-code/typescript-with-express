//importing dependencies
import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
//importing controllers & router
import { AppRouter } from './AppRouter';
import './controllers/LoginController';
import './controllers/RootController';

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
app.use(AppRouter.getInstance());

//listening
const PORT = 4000;
app.listen(PORT, () =>
  console.log(`listening on port ${PORT}, visit http://localhost:${PORT}`)
);
