import { Router } from '../../deps.ts';
import { findAll } from '../handlers/users.handlers.ts';

export const router = new Router()
  .get('/api/users', findAll);