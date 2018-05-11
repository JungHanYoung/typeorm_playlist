import { Request, Response } from "express";
import { User } from "../entity/User";

export const allUsers = async (_: Request, res: Response) => {
      const allUsers = await User.find({});
      res.json(allUsers);
}

export const addUser = async (req: Request, res: Response) => {
      const {
            firstName,
            lastName,
            age
      } = req.body;
      const user = await User.create({
            firstName,
            lastName,
            age
      });
      await user.save();
      res.json({
            success: true
      })
}

export const getUser = async (req: Request, res: Response) => {
      const { id } = req.params;
      const user = await User.findOne({ id });
      res.json(user);
}

export const updateUser = async (req: Request, res: Response) => {
      const { id } = req.params;
      const user = await User.findOne({ id });
      if(user) {
            user.firstName = req.body.firstName;
            await user.save();
            res.json({ success: true });
      } else {
            res.status(500).json({
                  error: "Can't not found user."
            });
      }
}

export const deleteUser = async (req: Request, res: Response) => {
      const { id } = req.params;
      const user = await User.findOne({ id });
      if(user) {
            await user.remove();
            res.json({
                  success: true
            });
      } else {
            res.status(500).json({
                  error: "Can't not found user."
            })
      }
}