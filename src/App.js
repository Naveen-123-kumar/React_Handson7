import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ContactCom from './Components/ContactCom';
import HomeCom from './Components/HomeCom';
import Navbar1 from './Components/Navbar';
import Student from './Components/Student';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar1/>
      <Routes>
        <Route path='/' element={<HomeCom/>}></Route>
        <Route path='/contactus' element={<ContactCom/>}></Route>
        <Route path='/students' element={<Student/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
