import * as express from 'express';
import * as bodyParser from "body-parser";
import * as morgan from 'morgan';

import categoryRouter from './routes/category';
import questionRouter from './routes/question';

export const startServer = () => {

      const app = express();

      app.use(morgan('dev'));

      app.use(bodyParser.urlencoded({ extended: false }));
      app.use(bodyParser.json());

      app.use('/category', categoryRouter);
      app.use('/question', questionRouter);
      
      app.listen(8888, () => {
            console.log('Server is listening on port 8888');
      });
      
}
