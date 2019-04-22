import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());

app.use('/api', routes);

app.listen(4000, () => console.log('App running on port 4000'));
