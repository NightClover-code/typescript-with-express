import { Router } from 'express';

export class AppRouter {
  private static instance: Router;

  static getInstance(): Router {
    if (!this.instance) {
      this.instance = Router();
    }

    return this.instance;
  }
}
