
import './App.css';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';
import ClinicExperience from './pages/ClinicExperience';



function App() {
  return (
    <BrowserRouter>
   <Routes>
   <Route>
        <Route path='/' element={<Home/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/clinicExperience' element={<ClinicExperience/>}/>

 </Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;