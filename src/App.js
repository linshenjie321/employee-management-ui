import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import EmployeeDetailForm from './components/EmployeeDetailForm';
import EmployeeSearchContainer from './components/EmployeeSearchContainer';

function App() {
  return (
    <div>
      <EmployeeDetailForm />
      <EmployeeSearchContainer />
    </div>
  );
}

export default App;
