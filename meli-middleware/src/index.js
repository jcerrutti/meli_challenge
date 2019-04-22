import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());

app.use('/api', routes);

app.listen(3000, () => console.log('App running on port 3000'));
