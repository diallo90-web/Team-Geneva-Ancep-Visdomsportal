import Footer from './components/shared/footer/Footer';
import LocationBar from './components/shared/locationbar/LocationBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {
  HomePage,
  NavigationPage,
  SearchPage,
  SoundPage,
  SubCategoryPage,
  WorkPage

} from "./pages"


function App() {

  return (
      <BrowserRouter>
        <LocationBar/>
          <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/Navigasjon' element={<NavigationPage/>}></Route>
            <Route path='/Fremgang' element={<HomePage/>}></Route>
            <Route path='/Sok' element={<SearchPage/>}></Route>
            <Route path='/Navigasjon/Verk' element={<SubCategoryPage/>}></Route>
            <Route path='Navigasjon/Verk/Tekster' element ={<WorkPage/>}></Route>
            <Route path='Navigasjon/Lyd' element = {<SoundPage/>}></Route>
          </Routes>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;
