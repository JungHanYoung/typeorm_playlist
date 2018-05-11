import { Router } from "express";
import { allPosts, addPost, getPost, updatePost, deletePost } from "../controllers/post";
import { authorization } from "../authorization";

const router = Router();

/**
 * Router Start
 */

router.route('/')
      .get(allPosts)
      .post(authorization, addPost)

router.route('/:id')
      .get(getPost)
      .put(updatePost)
      .delete(deletePost)

export default router;