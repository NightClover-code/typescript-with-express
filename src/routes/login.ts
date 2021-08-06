//importing dependencies
import { Router, Response, Request } from 'express';
import { RequestWithBody } from '../interfaces';
import { requireAuth } from '../middlewares';

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
router.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;

  if (
    email &&
    password &&
    email === 'bob123@gmail.com' &&
    password === 'bob123'
  ) {
    req.session = { loggedIn: true };
    res.redirect('/');
  } else res.send('Invalid email or password');
});

//root route
router.get('/', (req: Request, res: Response) => {
  if (req.session?.loggedIn)
    res.send(`
        <div>
          <div>You are logged in</div>
          <a href="/logout">Log out</a>
        </div>
    `);
  else
    res.send(`
        <div>
          <div>You are not logged in</div>
          <a href="/login">Login</a>
        </div>
    `);
});

//logout route
router.get('/logout', (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect('/');
});

//protected route
router.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send(`Welcome to protected route, bob!`);
});

export { router };
