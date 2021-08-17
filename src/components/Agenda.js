
import React from 'react';
import { Eventcalendar, getJson, toast } from '@mobiscroll/react';

const Agenda = ({ theme, themeVariant }) => {

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
            calendar: { type: 'week' },
            agenda: { type: 'day' }
        };
    }, []);

    

    return (
        <div className="w-50 m-auto">
            <Eventcalendar
                theme={theme} 
                themeVariant={themeVariant}
                data={myEvents}
                view={view}
                onEventClick={onEventClick}
            />
       </div>
    ); 
}

export default Agenda;