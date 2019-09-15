import { expect } from 'chai';
import React from 'react';

import controller from '../../../../../app/pages/demo/controller';

describe('demo Page controller', () => {
    it('mus call send with correct params', () => {
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
                { hour: '08:00', icon: 'sun', temp: 6},
                { hour: '1:00', icon: 'sun', temp: 10},
                { hour: '2:00', icon: 'sun', temp: 10},
                { hour: '3:00', icon: 'sun', temp: 10, current: true},
                { hour: '4:00', icon: 'sun', temp: 10},
                { hour: '5:00', icon: 'sun', temp: 10},
                { hour: '6:00', icon: 'sun', temp: 10},
                { hour: '7:00', icon: 'sun', temp: 10},
                { hour: '8:00', icon: 'sun', temp: 10},
                { hour: '9:00', icon: 'sun', temp: 10},
                { hour: '10:00', icon: 'sun', temp: 10},
                { hour: '11:00', icon: 'sun', temp: 10},
                { hour: '12:00', icon: 'sun', temp: 10},
                { hour: '1:00', icon: 'sun', temp: 10},
                { hour: '2:00', icon: 'sun', temp: 10},
                { hour: '3:00', icon: 'sun', temp: 10},
                { hour: '4:00', icon: 'sun', temp: 10},
                { hour: '5:00', icon: 'sun', temp: 10},
                { hour: '6:00', icon: 'sun', temp: 10},
                { hour: '7:00', icon: 'sun', temp: 10},
                { hour: '8:00', icon: 'sun', temp: 10},
                { hour: '9:00', icon: 'sun', temp: 10},
                { hour: '10:00', icon: 'sun', temp: 10},
                { hour: '10:00', icon: 'sun', temp: 10},
                { hour: '11:00', icon: 'sun', temp: 10},

            ],
            context: {
                tempUnits: '°',
            }
        };

        // TODO ADD TEST
        expect(controller(data)).to.be.an('object');
    });
});
