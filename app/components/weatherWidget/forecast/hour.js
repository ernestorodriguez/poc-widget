import React from 'react';

class Hour extends React.Component {
    render() {
        const { hour, icon, temp, units } = this.props;

        return (
            <li>
                <div className={'weather-widget__forecast-hour'}>
                    <div>{hour}</div>
                    <div> <img src={`https://place-hold.it/50x50?text=${icon}`} /></div>
                    <div>{temp}{units}</div>
                </div>
            </li>
        );
    }
}


export default Hour;
