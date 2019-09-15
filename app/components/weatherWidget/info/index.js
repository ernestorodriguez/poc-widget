import React from 'react';
import Temp from './temp';
import Icon from './icon';
import Additional from './additional';

class Info extends React.Component {
    render() {
        return (
            <div className={'weather-widget__info'}>
               <Icon/>
               <Temp/>
               <Additional/>
            </div>
        );
    }
}


export default Info;
