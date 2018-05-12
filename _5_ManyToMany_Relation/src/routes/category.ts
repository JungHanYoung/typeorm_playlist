import { Router } from "express";
import { Category } from "../entity/Category";

const router = Router();

/**
 * Router Start
 */

 router.route('/')
      .get(async (_, res) => {
            const categorys = await Category.find({ relations: ["questions"]});
            res.json(categorys)
      })
      .post(async (req, res) => {
            const {
                  name
            } = req.body;
            const category = await Category.create({
                  name
            });
            await category.save();
            res.json({ success: true });
      })

export default router;