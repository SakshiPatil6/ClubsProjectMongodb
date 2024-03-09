import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import CenAdminAuth from './Components/CentralizedAdmin/AdminAuth';
import RequestForm from './Components/SubAdmin/ReqForm';
import CenAdminHome from './Components/CentralizedAdmin/CenAdminHomePage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CenAdminAuth />} />
        <Route path='/reqform' element={<RequestForm />} />
        <Route path='/CenAdminHomePage' element=<CenAdminHome/>/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
