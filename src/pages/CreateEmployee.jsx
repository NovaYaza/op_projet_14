import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../redux/employeeSlice';
import DatePicker from '../components/DatePicker';
/* import Modal from '../components/Modal'; */
import Modal from '@novatom/react-modal';
import '@novatom/react-modal/dist/index.css';

const states = [
  { name: 'Alabama', abbreviation: 'AL' },
  { name: 'Alaska', abbreviation: 'AK' },
  { name: 'Arizona', abbreviation: 'AZ' },
  { name: 'Arkansas', abbreviation: 'AR' },
  { name: 'California', abbreviation: 'CA' },
  { name: 'Colorado', abbreviation: 'CO' },
];

const departments = [
  'Sales',
  'Marketing',
  'Engineering',
  'Human Resources',
  'Legal',
];

function CreateEmployee() {
  const dispatch = useDispatch();

  const initialFormState = {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    startDate: '',
    department: departments[0],
    street: '',
    city: '',
    state: states[0].abbreviation,
    zipCode: '',
  };

  const [employee, setEmployee] = useState(initialFormState);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setEmployee({ ...employee, [id]: value });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  // ✅ Fonction utilitaire pour convertir les Date
  const toISOStringIfDate = (value) => {
    if (value instanceof Date) return value.toISOString();
    try {
      const parsed = new Date(value);
      return isNaN(parsed) ? '' : parsed.toISOString();
    } catch {
      return '';
    }
  };

  const serializedEmployee = {
    ...employee,
    dateOfBirth: toISOStringIfDate(employee.dateOfBirth),
    startDate: toISOStringIfDate(employee.startDate),
  };

  console.log('Payload envoyé à Redux :', serializedEmployee);

  dispatch(addEmployee(serializedEmployee));
  setShowModal(true);
  setEmployee(initialFormState);
};

  const handleCloseModal = () => {
    setShowModal(false);
    setEmployee(initialFormState); // reset si fermeture manuelle
  };

  return (
    <div>
      <h2>Create Employee</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="first-name">First Name</label>
        <input id="firstName" type="text" value={employee.firstName} onChange={handleChange} required />

        <label htmlFor="last-name">Last Name</label>
        <input id="lastName" type="text" value={employee.lastName} onChange={handleChange} required />

        <label>Date of Birth</label>
        <DatePicker
          id="dateOfBirth"
          value={employee.dateOfBirth}
          onChange={(date) => setEmployee({ ...employee, dateOfBirth: date })}
        />

        <label>Start Date</label>
        <DatePicker
          id="startDate"
          value={employee.startDate}
          onChange={(date) => setEmployee({ ...employee, startDate: date })}
        />

        <fieldset className="address">
          <legend>Address</legend>

          <label>Street</label>
          <input id="street" type="text" value={employee.street} onChange={handleChange} required />

          <label>City</label>
          <input id="city" type="text" value={employee.city} onChange={handleChange} required />

          <label>State</label>
          <select id="state" value={employee.state} onChange={handleChange}>
            {states.map((s) => (
              <option key={s.abbreviation} value={s.abbreviation}>
                {s.name}
              </option>
            ))}
          </select>

          <label>Zip Code</label>
          <input id="zipCode" type="number" value={employee.zipCode} onChange={handleChange} required />
        </fieldset>

        <label>Department</label>
        <select id="department" value={employee.department} onChange={handleChange}>
          {departments.map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>

        <button type="submit">Save</button>
      </form>

      {showModal && (
        <Modal message="Employee Created!" onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default CreateEmployee;