import { User } from "./entity/User";
import { createConnection } from "typeorm";

createConnection()
.then(async (connection) => {

      const user = new User();
      user.firstName = "Timber";
      user.lastName = "Saw";
      user.age = 25;
      await user.save();
      
      const allUsers = await User.find();
      console.log(allUsers);
      const firstUser = await User.findOne(1);
      console.log(firstUser);
      const timber = await User.findOne({ firstName: "Timber", lastName: "Saw" });
      if(timber) {
            await timber.remove();
            console.log('timber remove..')
      }

      connection.close();
      
});
