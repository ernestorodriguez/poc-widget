import React from 'react';
import Temp from './temp';
import Icon from './icon';
import Additional from './additional';

class Info extends React.Component {
    render() {
        const { icon, temp, additional, context } = this.props;

        return (
            <div className={'weather-widget__info'}>
               <Icon icon={icon}/>
               <Temp units={context.tempUnits} {...temp}/>
               <Additional {...additional}/>
            </div>
        );
    }
}


export default Info;
