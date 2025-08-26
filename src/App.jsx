import { Routes, Route, Link } from 'react-router-dom';
import CreateEmployee from './pages/CreateEmployee';
import EmployeeList from './pages/EmployeeList';
import './styles/app.css';

function App() {
return (
  <div className="container">
    <h1 className="title">HRnet</h1>
      <nav>
      <Link to="/">Create Employee</Link> |{' '}
      <Link to="/employees">Employee List</Link>
      </nav>
      <Routes>
        <Route path="/" element={<CreateEmployee />} />
        <Route path="/employees" element={<EmployeeList />} />
      </Routes>
  </div>
  );
}

export default App;
