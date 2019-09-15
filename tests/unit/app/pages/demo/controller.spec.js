import { expect } from 'chai';
import React from 'react';

import controller from '../../../../../app/pages/demo/controller';

describe('demo Page controller', () => {
    it('mus call send with correct params', () => {
        const mockData = {
            'cod': '200',
            'message': 0.0032,
            'cnt': 36,
            'list': [
                {'dt': 1487246400, 'main': {'temp': 286.67, 'temp_min': 281.556, 'temp_max': 286.67, 'pressure': 972.73, 'sea_level': 1046.46, 'grnd_level': 972.73, 'humidity': 75, 'temp_kf': 5.11}, 'weather': [{'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '01d'}], 'clouds': {'all': 0}, 'wind': {'speed': 1.81, 'deg': 247.501}, 'sys': {'pod': 'd'}, 'dt_txt': '2017-02-16 14:00:00'},
                {'dt': 1487257200, 'main': {'temp': 285.66, 'temp_min': 281.821, 'temp_max': 285.66, 'pressure': 970.91, 'sea_level': 1044.32, 'grnd_level': 970.91, 'humidity': 70, 'temp_kf': 3.84}, 'weather': [{'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '01d'}], 'clouds': {'all': 0}, 'wind': {'speed': 1.59, 'deg': 290.501}, 'sys': {'pod': 'd'}, 'dt_txt': '2017-02-16 15:00:00'},
                {'dt': 1487259900, 'main': {'temp': 284.66, 'temp_min': 281.821, 'temp_max': 285.66, 'pressure': 970.91, 'sea_level': 1044.32, 'grnd_level': 970.91, 'humidity': 70, 'temp_kf': 3.84}, 'weather': [{'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '01d'}], 'clouds': {'all': 0}, 'wind': {'speed': 1.59, 'deg': 290.501}, 'sys': {'pod': 'd'}, 'dt_txt': '2017-02-16 16:00:00'}],
            'city': {'id': 6940463, 'name': 'Altstadt', 'coord': {'lat': 48.137, 'lon': 11.5752}, 'country': 'none'}};


        // TODO ADD TEST
        expect(controller(mockData)).to.be.an('object');
    });
});
