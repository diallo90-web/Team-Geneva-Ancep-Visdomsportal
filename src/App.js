import Footer from './components/shared/footer/Footer';
import LocationBar from './components/shared/locationbar/LocationBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import {
  HomePage,
  NavigationPage

} from "./pages"


function App() {

  return (
      <BrowserRouter>
        <LocationBar/>
          <Routes>
            <Route path='/Hjem' element={<HomePage/>}></Route>
            <Route path='/Navigasjon' element={<NavigationPage/>}></Route>
            <Route path='/Fremgang' element={<HomePage/>}></Route>
            <Route path='/Søk' element={<HomePage/>}></Route>
          </Routes>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;
