import './home.css';
// import Navbar from '../../components/Navbar/Navbar';
import Home2 from '../Home2/Home2';
import Home3 from '../Home3/Home3';
import {Link} from 'react-router-dom';
// import Footer from '../../components/Footer/Footer';

export default function Home() {
  return (
    <div>
        {/* <Navbar/> */}

        <div className="home-container">
            <div className="home-image">
                <img src="images/Hotelroomland/hotelroom9land.jpg" alt="" className="home-img" />            
            </div>

            <div className="home-content">
                <div className="home-info">
                    <div className="home-head"><h1 className='home-head-h1' >The Odyssey Bookings</h1></div>
                    <div className="home-text"><p className='home-text-para' >The simple yet comfortable atmosphere</p></div>
                </div>

                
                <form action="" className="home-form-grid">
                    <div className="row home-grid-box">
                    
                        <select name="" id="" className="home-select">
                            <option value="" className="home-option">Where will you like to stay?</option>
                            <option value="" className="home-option">Lagos</option>
                            <option value="" className="home-option">Enugu</option>
                        </select>

                        <span className="home-grid-line"></span>
                    
                        <input type="date" id="myDateInput" className="home-input" placeholder='' />

                        <span className="home-grid-line"></span>
                    
                        <input type="date" id="myDateInput" className="home-input" placeholder='' />

                        <span className="home-grid-line"></span>
                    
                        <button className="home-btn" type='submit'>Search</button>
                    
                    </div>
                </form>

                <div className="home-grid-guard">
                    <div className="home-card">
                        <div className="home-card-image">
                            <Link to='/phase1' >
                                <a href="#" className="img-href">
                                    <img src="images/Hotelroomport/hotelroom7port.jpg" alt="" className="home-card-img" />
                                </a>
                            </Link>
                        </div>

                        <div className="home-card-text">
                            <div className="home-card-head"><h6>Deluxe Suite</h6></div>
                            <div className="home-card-head"><h6>N25, 000 / Night</h6></div>
                            
                        </div>
                    </div>

                    <div className="home-card">
                        <div className="home-card-image">
                            <img src="images/Hotelroomport/hotelroom8port.jpg" alt="IEBIEDE" className="home-card-img" />
                        </div>

                        <div className="home-card-text">
                            <div className="home-card-head"><h6>Deluxe Suite</h6></div>
                            <div className="home-card-head"><h6>N25, 000 / Night</h6></div>
                            
                        </div>
                    </div>

                    <div className="home-card">
                        <div className="home-card-image">
                            <img src="images/Hotelroomport/hotelroom9port.jpg" alt="DGEWOF WOF" className="home-card-img" />
                        </div>

                        <div className="home-card-text">
                            <div className="home-card-head"><h6>Deluxe Suite</h6></div>
                            <div className="home-card-head"><h6>N25, 000 / Night</h6></div>
                            
                        </div>
                    </div>

                    <div className="home-card">
                        <div className="home-card-image">
                            <img src="images/Hotelroomport/hotelroom10port.jpg" alt="" className="home-card-img"/>
                        </div>

                        <div className="home-card-text">
                            <div className="home-card-head"><h6>Deluxe Suite</h6></div>
                            <div className="home-card-head"><h6>N25, 000 / Night</h6></div>
                            
                        </div>
                    </div>
                </div>
            </div>

            
        </div>



        <Home2/>

        <Home3/>
        
    </div>
  )
}
