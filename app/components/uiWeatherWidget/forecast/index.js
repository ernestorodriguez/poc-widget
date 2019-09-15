import React from 'react';
import Hour from './hour';

class Forecast extends React.Component {
    render() {
        const { list, context } = this.props;
        const hours = list.map((hour, index) => <Hour key={index} units={context.tempUnits} {...hour} />);

        return (
            <div className={'weather-widget__forecast'}>
                <ul className={'weather-widget__forecast-container'}>
                    {hours}
                </ul>
            </div>
        );
    }
}


export default Forecast;
