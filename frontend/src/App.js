import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hotel from './pages/Hotel/Hotel';
import Phase1 from './subpages/Phases/Phase1/Phase1';
import Booking1 from './subpages/Booking/Booking1/Booking1';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Booking2 from './subpages/Booking/Booking2/Booking2';
import AdminHome from './pages/Admin/AdminHome/AdminHome';
import Header from './components/Header/Header';
// import Olateju from './subpages/Olateju/Olateju';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        {/* <Navbar/> */}
        
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/hotel" element={<Hotel/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/phase1" element={<Phase1/>}/>
                <Route path="/booking1" element={<Booking1/>}/>
                <Route path="/booking2" element={<Booking2/> }/>
                <Route path="/adminHome" element={<AdminHome/> }/>
                <Route path="/allCustomers" element={<AdminHome/> }/>
                <Route path="/allHotels" element={<AdminHome/> }/>
  
            </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
