import { Routes, Route } from 'react-router-dom';  
import LoginPage from './Pages/LoginPage';
import SignUp from './Pages/SignUp';
import HomePage from './Pages/HomePage';
import UploadPage from './Pages/UploadPage';
import ShowDataPage from './Pages/ShowDataPage';
import { useState } from 'react';
import Header from './Components/Header';


function App() {

  const [excelData, setExcelData] = useState([]);

  return (
     <div   className='w-full  ' >
       <Header/>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/upload" element={<UploadPage  />} />
 
      <Route path="/showfile/:id" element={<ShowDataPage  />} />
    </Routes>
     </div>
  );
}

export default App;
