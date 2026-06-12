import React from 'react';
import Navbar from './makkansingh/Navbar';
import { Route, Routes } from 'react-router-dom';
import Aboutmla from './makkansingh/Aboutmla';
// import logo from './logo.svg';
import Makkan from './makkansingh/makkansingh';
import Contactus from './makkansingh/Contactus';









function App() {
  return (
    <div >
      
      < Navbar />
      
      <Routes>
        <Route path='/about' element={<Aboutmla />}/>
        <Route path='/'  element={<Makkan/>}/>
        <Route path='/contactus' element={<Contactus/>}/>
        
      </Routes>
      
    </div>
  );
}

export default App;
