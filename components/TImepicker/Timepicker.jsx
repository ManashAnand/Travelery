import React, { useRef, useEffect, useState, useCallback } from 'react';
import { TimepickerUI } from 'timepicker-ui';

function TimePicker({ value, onChange }) {
  const tmRef = useRef(null);

  const testHandler = useCallback(({ detail: { hour, minutes, type } }) => {
    const selectedTime = `${hour}:${minutes} ${type}`;
    onChange(selectedTime);
  }, [onChange]);

  useEffect(() => {
    const tm = tmRef.current;

    const newPicker = new TimepickerUI(tm, {});
    newPicker.create();

    tm.addEventListener('accept', testHandler);

    return () => {
      tm.removeEventListener('accept', testHandler);
    };
  }, [testHandler]);

  return (
    <div className="timepicker-ui" ref={tmRef}>
      <input type="text" className="timepicker-ui-input" defaultValue={value} />
    </div>
  );
}

export default TimePicker;
