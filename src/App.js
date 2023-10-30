import './App.css';
// import Admission from './admission/admission';
import AdmissionProcess from './admission/AdmissionProcess';
import FeesCOllection from './FeesCollect/fees_collect';
import Home from './Home/home';
import { Route, Router, Routes } from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/addmission' element={<AdmissionProcess/>}/>
      <Route path='/fees' element={<FeesCOllection/>}/>
      <Route />
    </Routes>
  )
}
export default App;
