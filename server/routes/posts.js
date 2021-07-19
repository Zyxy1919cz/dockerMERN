import express, { Router } from 'express';

// import { getPosts } from '../controllers/posts.js';

const router = express.Router();

//  Requests extreacted from ../controllesr/posts.js
// Router.get('/', getPosts);

router.get('/', (req, res) => {
    res.send('Database is logging...');
});

export default router;