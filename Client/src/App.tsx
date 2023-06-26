import React from 'react';
import { Route,Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <StudentLogin/>
      <Routes>

          <Route path="/" element={<Dasboard />} />

          <Route element={<></>} />
          <Route element={<></>} />

      </Routes>
    </div>
  );
}


export default App;
