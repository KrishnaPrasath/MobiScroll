import React , {useMemo} from 'react';
import {Datepicker} from '@mobiscroll/react';


const DatePickerWithInvalids = (props) => {
    const myInvalids = useMemo(() => [{
        start: '00:00',
        end: '08:59',
        recurring: {
            repeat: 'daily'
        }
    }, {
        start: new Date(2021, 2, 18, 9, 0),
        end: new Date(2021, 2, 18, 17, 0),
        recurring: {
            repeat: 'daily',
            count: 5,
            interval: 2
        }
    }, {
        start: new Date(2020, 2, 17, 20, 0),
        end: new Date(2020, 2, 17, 22, 0),
        recurring: 'FREQ=WEEKLY;UNTIL=2020-06-17;BYDAY=MO,WE'
    }], []);
    return <Datepicker invalid={myInvalids} />;
}

export default DatePickerWithInvalids;