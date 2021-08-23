//importing dependencies
import { requireAuth } from '../middlewares';
import { Router, Request, Response } from 'express';

const router = Router();

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
