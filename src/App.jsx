import { Routes, Route, Link, useLocation } from 'react-router-dom';
import CreateEmployee from './pages/CreateEmployee';
import EmployeeList from './pages/EmployeeList';
import './styles/app.css';

function App() {
  const location = useLocation();
  const showNav = location.pathname !== '/employees';

  return (
    <div className="container">
      <h1 className="title">HRnet</h1>

      {showNav && (
        <nav style={{ marginBottom: '1rem' }}>
          <Link to="/">Create Employee</Link> |{' '}
          <Link to="/employees">Employee List</Link>
        </nav>
      )}

      <Routes>
        <Route path="/" element={<CreateEmployee />} />
        <Route path="/employees" element={<EmployeeList />} />
      </Routes>
    </div>
  );
}

export default App;
