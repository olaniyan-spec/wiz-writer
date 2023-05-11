import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Footer from './Components/Footer';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route index element={<Home/>}></Route>
    </Routes>
    <Footer/>
    
    
    
    </BrowserRouter>
  );
}

export default App;
