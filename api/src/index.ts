import * as express from 'express';
import * as mongoose from 'mongoose';
import * as cors from 'cors';
import * as morgan from 'morgan';
import config from '../config';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(config.PORT, () => {
  mongoose
    .connect(config.mlabURL)
    .then(() => {
      console.log('Connected to DB');
      console.log('Server is running at port', config.PORT);
    })
    .catch(e => console.log('---', e));
});
