import React from 'react';
import Hour from './hour';

class Forecast extends React.Component {
    render() {
        return (
            <div className={'weather-widget__forecast'}>
                <ul>
                    <li>
                        <Hour/>
                    </li>
                </ul>
            </div>
        );
    }
}


export default Forecast;
