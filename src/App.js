import { Calendar, DateSelector, RangePickerTwoInputs, DatePickerWithInvalids, Agenda, Scheduler, SchedulerWithSegment } from './components/ComponentWrapper';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h1>"Calendar"</h1>
      <Calendar/>
      <h1>"DatePicker"</h1>
      <DateSelector select={"date"} controls={['date']}/>
      <h1>"Multiple DatePicker"</h1>
      <DateSelector selectMultiple={true}/>
      <p style={{fontStyle: "italic"}}>The Date picker can be used for selecting a single date, as well as the Calendar view. But only the Calendar view can be used for selecting multiple dates.</p>
      <h1>Range Selector (Calendar)</h1>
      <DateSelector select={"range"}/>
      <h1>Range Selector (DatePicker)</h1>
      <DateSelector select={"range"} controls={['date']}/>
      <p style={{fontStyle: "italic"}}>Could be used to select huge range of dates</p>
      <h1>TimePicker</h1>
      <DateSelector controls={['time']}/>
      <h1>TimePicker with range</h1>
      <DateSelector select={"range"} controls={['time']}/>
      <p style={{fontStyle: "italic"}}>Used to select only a range of time from a day</p>
      <h1>Range TimePicker with Date</h1>
      <DateSelector select={"range"} controls={['date','time']}/>
      <h1>Range TimePicker with Calendar</h1>
      <DateSelector select={"range"} controls={['calendar','time']}/>
      <h1>TimePicker with Calendar</h1>
      <DateSelector controls={['calendar','time']}/>
      <h1>Without Input</h1>
      <DateSelector display={'inline'} theme='ios'/>
      <h1>RangePicker with Two Inputs</h1>
      <RangePickerTwoInputs display={'inline'} />
      <h1>DatePicker with invalids</h1>
      <DatePickerWithInvalids/>
      <h1>Agenda</h1>
      <Agenda/>
      <h1>Agenda Android</h1>
      <Agenda theme="material" themeVariant="dark"/>
      <h1>Agenda ios</h1>
      <Agenda theme="ios" themeVariant="auto"/>
      <h1>Scheduler ios</h1>
      <Scheduler theme="window" themeVariant="auto" type="week"/>
      <h1>Scheduler With Segment</h1>
      <SchedulerWithSegment/>
    </div>
  );
}

export default App;
