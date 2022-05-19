import moment from 'moment';


export const miliToCustomDate = (mili) => {
    return {
        weekday: moment(mili).format('dddd'),
        day: moment(mili).format('Do'),
    }
}