import logo from './logo.svg';
import './App.css';

import { Routes, Route, BrowserRouter } from 'react-router-dom'
import But from './Components/clip/But';
import Latest_bikes from './Components/clip/Latest_bikes';
import LatestCar from './Components/clip/Latest Car';
import Upcoming_festivals from './Components/clip/Upcoming_festivals';
import Template from './Components/clip/Template';
import Lord from './Components/clip/Lord Krishna';

function App() {
  return (
    <>

      {/* <p className='text'>Ashish Singh...</p> */}
      
      <BrowserRouter>
        <But></But>
     
          <div className='d-flex flex-row'>
          <div><Template></Template></div>
        <div>
        <Routes>
          {/* <Route path='h_d' element={Template()} /> */}
          <Route path='Loard Krishna' element={Lord()} />
          <Route path='Upcoming festival' element={Upcoming_festivals()} />
          <Route path='latest Bikes' element={Latest_bikes()} />
          <Route path='Latest car' element={LatestCar()} />
          

        </Routes>
        </div>
          </div>
        

      </BrowserRouter>
      {/* <Loard_Krishna></Loard_Krishna> */}



    </>
  );
}

export default App;
