class DateHelpers {
    static getMonthName(index) {
        const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ];

        return months[index];
    }
    static getDayName(index) {
        const days = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
        ];

        return days[index];
    }
    static getHour(hours) {
        const hour = Math.abs(hours - 12);

        return `${hour}:00`;
    }
}

export default DateHelpers;
