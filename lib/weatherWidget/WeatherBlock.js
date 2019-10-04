
import _ from 'underscore';
import DateHelpers from '../utils/DateHelpers';

class WeatherBlock {
    constructor({ data, units}) {
        const date = new Date(data.dt_txt);

        this.timeStamp = date.getTime();
        this.date = date;
        this.current = units.get(data.main.temp);
        this.type = _.first(data.weather).main;

        const hours = this.date.getHours();

        this.icon = this.type.toLowerCase() + (hours > 20 ||  hours < 5 ? '-pm' : '');
        this.range = {
            maximum: units.get(data.main.temp_max),
            minimum: units.get(data.main.temp_min),
        };
    }
    getResume() {
        return {
            hour: DateHelpers.getHour(this.date.getHours()),
            icon: this.icon,
            temp: this.current,
            timeStamp: this.timeStamp
        };
    }
}

export default WeatherBlock;
