import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function CustomDatePicker({ id, value, onChange }) {
    const handleDateChange = (date) => {
    const formatted = date.toISOString().split('T')[0];
    onChange(formatted);
};

return (
    <DatePicker
        id={id}
        selected={value ? new Date(value) : null}
        onChange={handleDateChange}
        dateFormat="yyyy-MM-dd"
        placeholderText="Select date"
    />
    );
}


export default CustomDatePicker;