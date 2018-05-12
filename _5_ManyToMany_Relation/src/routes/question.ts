import { Router } from "express";
import { Question } from "../entity/Question";
import { Category } from "../entity/Category";

const router = Router();

router.route('/')
      .get(async (_, res) => {
            const questions = await Question.find({ relations: ["categories"]});
            res.json(questions);
      })
      .post(async (req, res) => {
            const {
                  title,
                  text,
                  cate
            } = req.body;
            
            const question = await Question.create({
                  title,
                  text
            });

            const categories = await Category.findByIds(cate);

            question.categories = categories

            await question.save();

            res.json({ success: true });

      })

export default router;