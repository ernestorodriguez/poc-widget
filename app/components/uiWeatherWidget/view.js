import React from 'react';
import Info from './info';
import Forecast from './forecast';

class WeatherWidgetView extends React.Component {
    render() {
        const {info, forecast, context } = this.props;

        return (
            <div className={'weather-widget'}>
                <Info context={context} {...info}/>
                <Forecast context={context} list={forecast}/>
            </div>
        );
    }
}


export default WeatherWidgetView;
