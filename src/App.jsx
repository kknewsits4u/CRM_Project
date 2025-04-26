import { Routes, Route } from 'react-router-dom';  
import LoginPage from './Pages/LoginPage';
import SignUp from './Pages/SignUp';


function App() {
  return (
     <Routes>
      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
