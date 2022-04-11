import express from 'express';
import pinsRoute from './router/pins.js';
import authRoute from './router/auth.js';
import { config } from './config.js';
import { connectDB } from './database/database.js';

const app = express();

app.use(express.json());

app.use('/pins', pinsRoute);
app.use('/auth', authRoute);

connectDB()
    .then(() => {
        const server = app.listen(config.host.port);
    })
    .catch(console.error);
