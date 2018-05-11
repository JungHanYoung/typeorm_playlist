import { Request, Response } from "express";
import { Post } from "../entity/Post";
import * as jwt from 'jsonwebtoken';
import { SECRET } from "../authorization";
import { User } from "../entity/User";

export const allPosts = async (_: Request, res: Response) => {
      const allPosts = await Post.find({});
      res.json(allPosts);
}

export const addPost = async (req: Request, res: Response) => {
      const {
            title
      } = req.body;

      const token = req.headers['x-token'];
      let firstName: any;
      let lastName: any;

      if(token) {
            const unlock: any = jwt.verify(token as string, SECRET);
            firstName = unlock.firstName;
            lastName = unlock.lastName;
      } else {
            res.status(403)
                  .json({
                        error: "No authentication"
                  })
      }

      const user = await User.findOne({ firstName, lastName });

      const post = await Post.create({
            title,
            author: user
      });

      await post.save();
      res.json({
            success: true
      });
}

export const getPost = async (req: Request, res: Response) => {
      const { id } = req.params;
      const post = await Post.findOne({ id });
      if(post) {
            res.json(post);
      } else {
            res.status(500).json({
                  error: "Can't not found post."
            })
      }
}

export const updatePost = async (req: Request, res: Response) => {
      const { id } = req.params;
      const {
            title
      } = req.body;
      const post = await Post.findOne({ id });
      if(post) {
            post.title = title;
            await post.save();
            res.json({
                  success: true
            });
      } else{
            res.status(500).json({
                  error: "Can't not found post."
            })
      }
}

export const deletePost = async (req: Request, res: Response) => {
      const { id } = req.params;
      const post = await Post.findOne({ id });
      if (post) {
            await post.remove();
            res.json({
                  success: true
            });
      } else {
            res.status(500).json({
                  error: "Can't not found user."
            })
      }
}