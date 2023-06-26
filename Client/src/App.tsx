import React from 'react';
import { Route,Routes } from 'react-router-dom';
import StudentLogin from './component/StudentLogin/StudentLogin';
import Dasboard from './component/Dashboard/Dasboard';
import LandingPage from './component/LandingPage/LandingPage';


function App() {
  return (
    <div>
      {/* <StudentLogin/> */}
      <Routes>

          <Route path="/" element={<LandingPage />} />

          <Route path='/student-login' element={<StudentLogin/>} />
          <Route path='/dasbord' element={<Dasboard/>} />

      </Routes>
    </div>
  );
}


export default App;
