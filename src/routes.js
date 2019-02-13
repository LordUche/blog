import { Router } from 'express';
import signUp from './controllers/users';
import createPost from './controllers/posts';

const router = new Router();

router.post('/users/new', signUp).post('/users/:userId/posts/new', createPost);
router.all('*', (req, res) => res.status(404).json('Not found'));

export default router;
