import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from "express";
import { User } from "./entity/User";

export const SECRET = "ILoveYou";

export const authorization = (req: Request, res: Response, next: NextFunction) => {

      const token = req.headers['x-token'];
      if(token) {
            const user = jwt.verify(token as string, SECRET);
            console.log(user);
            next();
      } else {
            res.status(403).json({
                  error: "No authorization"
            });
      }
}

export const loginControl = async (req: Request, res: Response) => {
      const {
            firstName,
            lastName
      } = req.body;
      const user = await User.findOne({ firstName, lastName });
      if(user) {
            console.log(user);
            const token = jwt.sign(req.body, SECRET);
            res.json({
                  success: true,
                  token
            });
      } else {
            res.status(500)
                  .json({
                        error: "Can't found user"
                  })
      }
}