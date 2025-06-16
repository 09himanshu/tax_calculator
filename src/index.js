import express from 'express'

import { env } from './config/env.config.js'

const app = express()

const serverPort = env.port
const serverHost = env.host

app.listen(serverPort, serverHost, () => {
    console.log(`Server is running at http://${serverHost}:${serverPort}`);
}).on('error', (err) => {
    console.error('Error starting server:', err);
});