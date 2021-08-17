import React, {useState} from 'react';
import { Input, Datepicker } from '@mobiscroll/react';

const RangePickerTwoInputs = () => {
  const [start, setStartInput] = useState(null);
  const [end, setEndInput] = useState(null);

  return <>
      <div className="common justify-content-around">
        <Input ref={setStartInput} label="Start date" />
        <Input ref={setEndInput} label="End date" />
      </div>
      <Datepicker select="range" startInput={start} endInput={end} />
    </>;
}

export default RangePickerTwoInputs;