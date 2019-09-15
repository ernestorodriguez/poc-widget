import api from './api';
import server from './app/server';
import express from 'express';
import { config } from './config';

const App = express();
const port = config.server.port;

App.use(config.server.apiPath, api);
App.use(config.server.basePath, server);
App.use(express.static(config.server.staticsFolder));

App.listen(port, () => console.log(`Server running on port: ${port}!`));


