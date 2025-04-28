import { Routes, Route } from 'react-router-dom';  
import LoginPage from './Pages/LoginPage';
import SignUp from './Pages/SignUp';
import HomePage from './Pages/HomePage';


function App() {
  return (
     <div   className='w-full  ' >
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
     </div>
  );
}

export default App;
