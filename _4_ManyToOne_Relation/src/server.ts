import * as express from 'express';
import * as bodyParser from "body-parser";
import * as morgan from 'morgan';

import userRouter from './routes/user';
import postRouter from './routes/post';
import { loginControl } from './authorization';

export const startServer = () => {

      const app = express();

      app.use(morgan('dev'));

      app.use(bodyParser.urlencoded({ extended: false }));
      app.use(bodyParser.json());

      app.post('/login', loginControl);
      app.use('/user', userRouter);
      app.use('/post', postRouter);
      
      app.listen(8888, () => {
            console.log('Server is listening on port 8888');
      });
      
}
