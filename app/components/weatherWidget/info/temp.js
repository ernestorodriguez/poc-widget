import React from 'react';

class Temp extends React.Component {
    render() {
        const { type, current, range, units } = this.props;

        return (
            <div className={'weather-widget-info__block weather-widget-info__block--temp'}>
                <div className={'info-temp-header'}>
                    <div className={'info-temp-header__block info-temp-header__block--type'}>{ type }</div>
                    <div className={'info-temp-header__block info-temp-header__block--range'}>{ range.maximum }{ units } / {range.minimum}{ units }</div>
                </div>
                <div className={'info-temp-right-now'}>
                    { current }{ units }
                </div>
            </div>
        );
    }
}

export default Temp;
