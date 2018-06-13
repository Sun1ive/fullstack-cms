import * as express from 'express';
import * as mongoose from 'mongoose';
import * as cors from 'cors';
import * as morgan from 'morgan';
import * as responseTime from 'response-time';
import config from '../config';
import articleRoutes from './routes/Article';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(responseTime());

app.use('/v1/articles', articleRoutes);

mongoose.set('debug', true);

app.get('/', (req, res) => res.send('<h1>Hello world</h1>'));

app.listen(config.PORT, () => {
  mongoose
    .connect(config.mlabURL)
    .then(() => {
      console.log('Connected to DB');
      console.log('Server is running at port', config.PORT);
    })
    .catch(e => console.log('Error:', e));
});
