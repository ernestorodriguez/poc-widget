import React from 'react';
import Temp from './temp';
import Icon from './icon';
import Additional from './additional';

class Info extends React.Component {
    componentDidMount() {
        TweenLite.to('.weather-widget-info__block--icon', .5, { delay: 2, opacity: 1, y: 0}, '+=0.5');
    }
    render() {
        const { temp, additional, context } = this.props;

        return (
            <div className={'weather-widget__info'}>
               <Icon icon={temp.icon}/>
               <Temp units={context.tempUnits} {...temp}/>
               <Additional {...additional}/>
            </div>
        );
    }
}

export default Info;
