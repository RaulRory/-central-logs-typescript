import express from 'express';
import cors from 'cors';
import { route } from './routes';

const app = express();

app.use(route);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

export { app };
