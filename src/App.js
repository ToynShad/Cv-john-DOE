import { Route, Routes } from 'react-router-dom';

import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Realisations from './Pages/Realisations';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Legal from './Pages/Legal';
import ApiGitHub from './Pages/ApiGitHub';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Components/Header'
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header id="top"/>

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/realisations' element={<Realisations />}/>
        <Route path='/blog' element={<Blog />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/legal' element={<Legal />}/>
        <Route path='/profil-github' element={<ApiGitHub />}/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
