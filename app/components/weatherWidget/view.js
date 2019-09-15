import React from 'react';
import Info from './info';
import Forecast from './forecast';

class WeatherWidgetView extends React.Component {
    render() {
        return (
            <div className={'weather-widget'}>
                <Info/>
                <Forecast/>
            </div>
        );
    }
}


export default WeatherWidgetView;
