import * as express from 'express';
import { User } from "./entity/User";
import { createConnection } from "typeorm";

createConnection()
.then(async () => {

      const app = express();

      app.get('/createUser', async (_, res) => {
            const user = new User();
            user.firstName = "Timber";
            user.lastName = "Saw";
            user.age = 25;
            await user.save();
            res.json(user);
      });

      app.get('/allUsers', async (_, res) => {
            const allUsers = await User.find();
            res.json(allUsers);
      });

      app.get('/firstUser', async (_, res) => {
            const firstUser = await User.findOne(1);
            res.json(firstUser);
      })
      
      app.get('/getUser/timber', async (_, res) => {
            const timber = await User.findOne({ firstName: "Timber", lastName: "Saw" });
            res.json(timber);

      })

      app.get('/deleteUser/timber', async (_, res) => {
            const timber = await User.findOne({ firstName: "Timber", lastName: "Saw" });
            if(timber) {
                  await timber.remove();
                  res.json({
                        success: true
                  });
            } else {
                  res.status(500).json({
                        error: "Can't find timber.."
                  });
            }
      });

      app.listen(8888);
      
});
