import { Router } from 'express';
import demo from './../pages/demo';
import { error, notFound, getWeatherData } from './middlewares/utils';

const router = Router();

router.use('/', getWeatherData, demo);
//router.use(notFound);

router.use(error);

export default router;
