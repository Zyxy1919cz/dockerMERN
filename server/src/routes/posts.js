import express, { Router } from 'express';

import { getPosts, createPost } from '../controllers/posts.js';

const router = express.Router();

//  Requests extreacted from ../controllesr/posts.js
router.get('/', getPosts);
router.post('/', createPost);

export default router;