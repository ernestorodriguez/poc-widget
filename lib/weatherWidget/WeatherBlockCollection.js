import WeatherBlock from './WeatherBlock';
import _ from 'underscore';

class WeatherBlockCollection {
    constructor({ list, units}) {
        this.list = list.map((blockData) => new WeatherBlock({
            data: blockData,
            units
        }));
    }

    getUiList(nowTime) {
        const nowTimeStamp = nowTime.getTime();

        const uiList = this.list.map((block) => {
            return block.getResume(nowTime);
        });

        let currentBlock = {};

        _.each(uiList, (block)=> {
            if (block.timeStamp <= nowTimeStamp) {
                currentBlock.active = false;
                delete currentBlock.active;
                currentBlock = block;
            }

        });

        currentBlock.active = true;

        return uiList;
    }

    getCurrent(nowTime) {
        const nowTimeStamp = nowTime.getTime();

        let current = null;

        _.each(this.list, (block) => {
            if (block.timeStamp <= nowTimeStamp) {
                current = block;
            }
        });

        return current;
    }
}

export default WeatherBlockCollection;
