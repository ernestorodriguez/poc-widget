import React from 'react';

class Temp extends React.Component {
    render() {
        const { type, current, range, units } = this.props;

        return (
            <div className={'weather-widget-info__temp'}>
                <div className={'weather-widget__info-temp-header'}>
                    <div>{ type }</div>
                    <div>{ range.maximum }{ units } / {range.minimum}{ units }</div>
                </div>
                <div className={'weather-widget__info-temp-right-now'}>
                    { current }{ units }
                </div>
            </div>
        );
    }
}

export default Temp;
