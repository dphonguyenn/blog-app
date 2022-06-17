import express from 'express';
import { getPostsPage, createPost, updatePost, deletePost } from '../app/controllers/PostsController.js';
const router = express.Router();

router.get('/', getPostsPage);
router.post('/', createPost);
router.post('/update', updatePost);
router.delete('/delete/:id', deletePost);

export default router;