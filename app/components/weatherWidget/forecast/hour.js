import React from 'react';

class Hour extends React.Component {
    render() {
        return (
            <div className={'weather-widget__forecast-hour'}>
                <div>11:00</div>
                <div> <img src={'https://place-hold.it/50x50'} /></div>
                <div>10°</div>
            </div>
        );
    }
}


export default Hour;
