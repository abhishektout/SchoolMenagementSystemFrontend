import './App.css';
import AdmissionProcess from './admission/AdmissionProcess';
import FeesCOllection from './FeesCollect/fees_collect';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './Home/home';


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
