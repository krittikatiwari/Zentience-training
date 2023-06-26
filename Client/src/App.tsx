import React from 'react';
import { Route,Routes } from 'react-router-dom';
import StudentLogin from './component/StudentLogin/StudentLogin';



function App() {
  return (
    <div>
      <StudentLogin/>
      <Routes>
          <Route element={<></>} />
          <Route element={<></>} />
          <Route element={<></>} />
      </Routes>
    </div>
  );
}

export default App;
