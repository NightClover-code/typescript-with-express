//importing dependencies
import express, { Request, Response } from 'express';

//init server
const app = express();

//routes
app.get('/', (req: Request, res: Response) => {
  res.send(`
        <div>
          <h1>Hi there!</h1>
        </div>
    `);
});

//listening
const PORT = 4000;
app.listen(PORT, () =>
  console.log(`listening on port ${PORT}, visit http://localhost:${PORT}`)
);
