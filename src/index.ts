//importing dependencies
import express from 'express';
import { router } from './routes/login';

//init server
const app = express();

//middlewares
app.use(router);

//listening
const PORT = 4000;
app.listen(PORT, () =>
  console.log(`listening on port ${PORT}, visit http://localhost:${PORT}`)
);
