import { createSlice } from '@reduxjs/toolkit';


const employeeSlice = createSlice({
    name: 'employees',
    initialState: JSON.parse(localStorage.getItem('employees')) || [],
    reducers: {
        addEmployee: (state, action) => {
        state.push(action.payload);
        localStorage.setItem('employees', JSON.stringify(state));
        },
    },
});


export const { addEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;