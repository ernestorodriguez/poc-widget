import { Router } from 'express';
import controller from './controller';
import template from '../../components/layout';
import { renderToString } from 'react-dom/server';
const router = Router();

router.get('/', (req, res) => {
    const data = {
        info: {
            icon: 'sun',
            temp: {
                type: 'Clear',
                current: 10,
                range: {
                    minimum: 2,
                    maximum: 12,
                },
            },
            additional: {
                city: 'Munich',
                day: 'Thursday',
                date: '28. March'
            }
        },
        forecast: [
            { hour: '9:00', icon: 'sun', temp: 10},
            { hour: '10:00', icon: 'sun', temp: 10},
            { hour: '11:00', icon: 'sun', temp: 10},
            { hour: '12:00', icon: 'sun', temp: 10},
            { hour: '1:00', icon: 'sun', temp: 10},
            { hour: '2:00', icon: 'sun', temp: 10},
            { hour: '3:00', icon: 'sun', temp: 10}
        ],
        context: {
            tempUnits: '°',
        }
    };
    const render = renderToString(controller(data));

    res.send(template({
        body: render,
        title: 'Demo Page',
        pageId: 'demo',
    }));
});

export default router;
