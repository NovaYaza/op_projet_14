import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function CustomDatePicker({ id, value, onChange }) {
  return (
    <DatePicker
      id={id}
      selected={value instanceof Date ? value : (value ? new Date(value) : null)}
      onChange={(date) => onChange(date)}
      dateFormat="MM/dd/yyyy"
      placeholderText="Select date"
    />
  );
}

export default CustomDatePicker;