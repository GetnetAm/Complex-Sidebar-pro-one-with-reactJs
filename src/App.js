
import { Router } from '@mui/icons-material';
import './App.css';
import SideMenu from './Components/SideMenu';
import { Route } from 'react-router-dom';
import Dashboard from './Components/pages/Dashboard';
import Design from './Components/pages/Design';

function App() {
  return (
    <div className="App">
      {/* <Router> */}
        
     <SideMenu />
     {/* <Route path='/' element={<Dashboard />} />
     <Route path='/design' element={<Design />} /> */}

     {/* </Router> */}
    </div>
  );
}

export default App;
