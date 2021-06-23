//importing dependencies
import { Router, Response, Request } from 'express';

const router = Router();

//get route
router.get('/login', (req: Request, res: Response) => {
  res.send(`
    <form method="POST">
        <div>
            <label>Email</label>
            <input name="email" type="email" />
        </div>
        <div>
            <label>Password</label>
            <input name="password" type="password" />
        </div>
        <button>Submit</button>
    </form>
  `);
});

//post route
router.post('/login', (req: Request, res: Response) => {
  const { email, password } = req.body;

  res.send(email + password);
});

export { router };
