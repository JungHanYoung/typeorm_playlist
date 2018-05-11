import { Router } from "express";
import { allUsers, addUser, getUser, updateUser, deleteUser } from "../controllers/user";

const router = Router();

router.route('/')
      .get(allUsers)
      .post(addUser)

router.route('/:id')
      .get(getUser)
      .put(updateUser)
      .delete(deleteUser)

export default router;