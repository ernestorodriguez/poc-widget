import React from 'react';

class Temp extends React.Component {
    render() {
        return (
            <div className={'weather-widget-info__temp'}>
                <div className={'weather-widget__info-temp-header'}>
                    <div>Clear</div>
                    <div>12° / 2°</div>
                </div>
                <div className={'weather-widget__info-temp-right-now'}>
                    10°
                </div>
            </div>
        );
    }
}

export default Temp;
