import { Routes, Route } from 'react-router-dom';
import './App.css';
import RegistrationSharedLauout from './components/RegistrationSharedLayout/RegistrationSharedLayout';
import { RegistrationForm } from './components';

function App() {
  return (
    <Routes>
      <Route path="/" element={<RegistrationSharedLauout />}>
        <Route index element={<RegistrationForm type="SignIn" />} />
      </Route>
    </Routes>
  );
}

export default App;
