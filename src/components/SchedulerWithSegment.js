import React from 'react';
import { Eventcalendar, getJson, setOptions, CalendarNav, SegmentedGroup, SegmentedItem, CalendarPrev, CalendarToday, CalendarNext } from '@mobiscroll/react';

setOptions({
    theme: 'ios',
    themeVariant: 'light'
});

const SchedulerWithSegment = () => {

    const [view, setView] = React.useState('month');
    const [myEvents, setEvents] = React.useState([]);

    React.useEffect(() => {
        getJson('https://trial.mobiscroll.com/events/?vers=5', (events) => {
            setEvents(events);
        }, 'jsonp');
    }, []);

    const [calView, setCalView] = React.useState(
        {
            calendar: { labels: true }
        }
    );

    const changeView = (event) => {
        let calView;
        
        switch (event.target.value) {
            case 'month':
                calView = {
                    calendar: { labels: true }
                }
                break;
            case 'week':
                calView = {
                    schedule: { type: 'week' }
                }
                break;
            case 'day':
                calView = {
                    schedule: { type: 'day' }
                }
                break;
            case 'agenda':
                calView = {
                    calendar: { type: 'week' },
                    agenda: { type: 'week' }
                }
                break;
            default:
                break;
        }

        setView(event.target.value);
        setCalView(calView);
    }
    
    const customWithNavButtons = () => {
        return <React.Fragment>
            <CalendarNav className="cal-header-nav" />
            <div className="cal-header-picker">
                <SegmentedGroup value={view} onChange={changeView}>
                    <SegmentedItem value="month">
                        Month
                    </SegmentedItem>
                    <SegmentedItem value="week">
                        Week
                    </SegmentedItem>
                    <SegmentedItem value="day">
                        Day
                    </SegmentedItem>
                    <SegmentedItem value="agenda">
                        Agenda
                    </SegmentedItem>
                </SegmentedGroup>
            </div>
            <CalendarPrev className="cal-header-prev" />
            <CalendarToday className="cal-header-today" />
            <CalendarNext className="cal-header-next" />
        </React.Fragment>;
    }

    return (
        <div className="md-switching-view-cont">
            <Eventcalendar
                renderHeader={customWithNavButtons}
                height={750}
                view={calView}
                data={myEvents}
            />
        </div>
    ); 
}

export default SchedulerWithSegment;
