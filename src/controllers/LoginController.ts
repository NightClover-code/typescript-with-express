import { Router, Response, Request } from 'express';
import { get } from 'http';

@controller('/')
class LoginController {
  @get('/login')
  getLogin(req: Request, res: Response) {
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
  }
}
