import React from 'react';
import { Datepicker } from "@mobiscroll/react";
import '@mobiscroll/react/dist/css/mobiscroll.min.css';

const DateSelector = (props) => {
    let setTheme = "windows";
    const {selectMultiple, theme, select, controls, display} = props;
    if(theme){
        setTheme = theme;
    }
    const [myBirthday, setMyBirthday] = React.useState(null);
    const pickerChange = (ev) => {
        setMyBirthday(ev.value);
    }

    return (
        <div className="common">
            <Datepicker select={select} theme={setTheme} controls={controls} display={display} selectMultiple={selectMultiple} value={myBirthday} onChange={pickerChange} />
        </div>
    );
}

export default DateSelector;