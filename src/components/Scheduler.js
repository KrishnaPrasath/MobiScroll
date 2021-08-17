import React from 'react';
import { Eventcalendar, getJson, toast } from '@mobiscroll/react';

const Scheduler = (props) => {
    const {type} = props;
    const [myEvents, setEvents] = React.useState([]);

    React.useEffect(() => {
        getJson('https://trial.mobiscroll.com/events/?vers=5', (events) => {
            setEvents(events);
        }, 'jsonp');
    }, []);
    
    const onEventClick = React.useCallback((event) => {
        toast({
            message: event.event.title
        });
    }, []);
    
    const view = React.useMemo(() => {
        return {
            schedule: { type: type }
        };
    }, []);
    const invalids = [{
        start: '12:00',
        end: '13:00',
        title: 'Lunch break',
        type: 'lunch',
        recurring: {
            repeat: 'weekly',
            weekDays: 'MO,TU,WE,TH,FR'
        }
    }];


    return (
        <Eventcalendar
            theme="ios" 
            themeVariant="light"
            clickToCreate={true}
            dragToCreate={true}
            dragToMove={true}
            dragToResize={true}
            data={myEvents}
            view={view}
            onEventClick={onEventClick}
            invalid={invalids}
       />
    ); 
}

export default Scheduler;

