import * as express from 'express';
import { User } from './entity/User';
import { UserCode } from './entity/UserCode';


export const startServer = () => {

      const app = express();
      
      app.get('/createUser/timber', async (_, res) => {
            const user = new User();
            user.firstName = "Timber";
            user.lastName = "Saw";
            user.age = 25;
      
            const userCode = new UserCode();
            userCode.personalCode = (Math.random()).toString();
            await userCode.save();
      
            user.userCode = userCode;
            await user.save();
      
            res.json(user);
      });
      
      app.get('/getUser/timber/noRelation', async (_, res) => {
            const timber = await User.findOne({ firstName: "Timber", lastName: "Saw" });
            res.json(timber);
      })
      
      app.get('/getUser/timber', async (_, res) => {
            const timber = await User.findOne({ firstName: "Timber", lastName: "Saw" }, { relations: ["userCode"]});
            res.json(timber);
      });
      
      // 제거시 유저코드까지 한번에 제거됨.
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
      
      // 데이터 제거 불가능
      app.get('/deleteCode', async (_, res) => {
            const allUserCodes = await UserCode.find({});
            allUserCodes.forEach(async (userCode) => {
                  await userCode.remove();
            });
            res.json({ success: true });
      });
      
      app.listen(8888);
      
}
