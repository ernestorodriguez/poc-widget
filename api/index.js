import { Router } from 'express';
import demo from './demo';
const router = Router();

router.get('/', demo);

export default router;
