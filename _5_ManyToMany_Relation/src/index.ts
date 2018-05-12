import { createConnection } from "typeorm";
import { startServer } from './server';

createConnection()
.then(async () => {

      startServer();
      
});
