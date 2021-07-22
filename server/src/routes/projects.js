import express, { Router } from 'express';

import { getProjects, createProject } from '../controllers/projects.js';

const router = express.Router();

//  Requests extreacted from ../controllesr/projects.js
router.get('/', getProjects);
router.post('/', createProject);

export default router;