// Format MM/DD/YYYY
const formatDate = (date) => {
  try {
    const d = date instanceof Date ? date : new Date(date);
    if (isNaN(d)) return '';
    return d.toLocaleDateString('en-US'); // ex: 05/31/2025
  } catch {
    return '';
  }
};

// Tri chronologique
const dateSort = (rowA, rowB, columnId) => {
  const a = rowA.values[columnId];
  const b = rowB.values[columnId];
  const dateA = a instanceof Date ? a : new Date(a);
  const dateB = b instanceof Date ? b : new Date(b);

  return dateA - dateB;
};

// Tri insensible à la casse
const caseInsensitiveSort = (rowA, rowB, columnId) => {
  const a = rowA.values[columnId]?.toString().toLowerCase() || '';
  const b = rowB.values[columnId]?.toString().toLowerCase() || '';
  return a.localeCompare(b);
};

export const employeeColumns = [
  {
    Header: 'First Name',
    accessor: 'firstName',
    sortType: caseInsensitiveSort,
  },
  {
    Header: 'Last Name',
    accessor: 'lastName',
    sortType: caseInsensitiveSort,
  },
  {
    Header: 'Start Date',
    accessor: 'startDate',
    sortType: dateSort,
    Cell: ({ value }) => formatDate(value),
  },
  {
    Header: 'Department',
    accessor: 'department',
    sortType: caseInsensitiveSort,
  },
  {
    Header: 'Date of Birth',
    accessor: 'dateOfBirth',
    sortType: dateSort,
    Cell: ({ value }) => formatDate(value),
  },
  {
    Header: 'Street',
    accessor: 'street',
    sortType: caseInsensitiveSort,
  },
  {
    Header: 'City',
    accessor: 'city',
    sortType: caseInsensitiveSort,
  },
  {
    Header: 'State',
    accessor: 'state',
    sortType: caseInsensitiveSort,
  },
  {
    Header: 'Zip Code',
    accessor: 'zipCode',
    sortType: (rowA, rowB, columnId) => {
      const a = parseInt(rowA.values[columnId], 10);
      const b = parseInt(rowB.values[columnId], 10);
      return (isNaN(a) ? 0 : a) - (isNaN(b) ? 0 : b);
    },
  },
];