import { Router } from 'express';
import demo from './../pages/demo';
import { error, notFound } from './middlewares/utils';

const router = Router();

router.use('/', demo);
router.use('*', notFound);

router.use(error);

export default router;
