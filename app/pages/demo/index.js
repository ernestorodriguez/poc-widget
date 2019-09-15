import { Router } from 'express';
import controller from './controller';
import template from '../../components/layout';
import { renderToString } from 'react-dom/server';
const router = Router();

router.get('/', (req, res) => {
    const render = renderToString(controller(res.locals.weatherData));

    res.send(template({
        body: render,
        title: 'Demo Page',
        pageId: 'demo',
    }));
});

export default router;
