import Navbar from '../../../components/Navbar/Navbar';
import './phase1.css';
import {Link} from 'react-router-dom';

export default function Phase1() {
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row mt-5 phase1-control">
                <div className="col-sm-12 col-md-12 col-lg-3 check">
                    <div className="phase1-title"><h3>Book Now</h3></div>
                    <div className="divisions"><h6>Preferred Location</h6></div>
                    <div className="divisions"><h6>16-09-2023</h6></div>
                    <div className="divisions"><h6>20-09-2023</h6></div>
                    <div className="divisions"><h6>1 Adult - 0 Child</h6></div>
                    <div className="res-button">
                        <a href="#" className="res-btn">Make a Reservation</a>
                    </div>
                </div>

                <div className=" col-sm-12 col-md-12 col-lg-9 column-control bg-primary">
                    <form className='phase1-form' action="">
                        <label className='sort-label' for="sort-by">Sort by</label>
                        <select className='sort-select' id="sort-by" name="sort-by">
                            <div><i class="bi bi-microsoft"></i></div>
                            <option value="default">Prices</option>
                            <option value="name">Quality</option>
                        </select>
                        <div className="phase1-show">
                            <b className='phase1-bold'>Showing 1 - 10 </b>of 125 <br />results
                        </div>
                        
                    </form>
                    
                    
                    <div className="container">
                        <div className="row field-row bg-success">
                            <div className="col-sm-12 col-md-6 col-lg-3 phase1-card">
                                <div className="phase1-image">
                                    <Link to='/booking1'>
                                        <a href="#" className="phase1-img-href">
                                            <img src="images/Hotelroomport/hotelroom7port.jpg" alt="" className="phase1-img" />
                                        </a>
                                    </Link>

                                    <div className="phase1-box">20K /Night</div>
                                </div>

                                <div className="phase1-info">
                                    <div className="phase1-head"><h4 className='phase1-h4' >Deluxe Suite</h4></div>
                                    <div className="phase1-h5"><h6>Victorira Island, Lagos</h6></div>
                                    
                                    <div className="phase1-view-flex">
                                        <div className="phase1-views"><p>247, 593 Views</p></div>
                                        <div className="phase1-line"></div>
                                        <div className="phase1-like"><i class="fa fa-regular fa-thumbs-up"></i> 78%</div>
                                    </div>
                                    
                                </div>
                            </div> 

                            <div className="col-sm-12 col-md-6 col-lg-3 phase1-card">

                                <div className="phase1-image">
                                    <Link to='/booking2' >
                                        <a href="#" className="phase1-img-href">
                                            <img src="images/Hotelroomland/hotelroom1land.jpg" alt="" className="phase1-img" />
                                        </a>
                                    </Link>

                                    <div className="phase1-box">20K /Night</div>
                                </div>
                                

                                <div className="phase1-info">
                                    <div className="phase1-head"><h4 className='phase1-h4' >Deluxe Suite</h4></div>
                                    <div className="phase1-h5"><h6>Victorira Island, Lagos</h6></div>
                                    
                                    <div className="phase1-view-flex">
                                        <div className="phase1-views"><p>247, 593 Views</p></div>
                                        <div className="phase1-line"></div>
                                        <div className="phase1-like"><i class="fa fa-regular fa-thumbs-up"></i> 78%</div>
                                    </div>
                                
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-6 col-lg-3 phase1-card">
                                <div className="phase1-image">
                                    <a href="#" className="phase1-img-href">
                                        <img src="images/Hotelroomland/hotelroom10land.jpg" alt="" className="phase1-img" />
                                    </a>

                                    <div className="phase1-box">20K /Night</div> 
                                </div>

                                <div className="phase1-info">
                                    <div className="phase1-head"><h4 className='phase1-h4' >Deluxe Suite</h4></div>
                                    <div className="phase1-h5"><h6>Victorira Island, Lagos</h6></div>
                                    
                                    <div className="phase1-view-flex">
                                        <div className="phase1-views"><p>247, 593 Views</p></div>
                                        <div className="phase1-line"></div>
                                        <div className="phase1-like"><i class="fa fa-regular fa-thumbs-up"></i> 78%</div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    

                </div>
            </div>



            {/* ------Second Row------ */}
            <div className="row row2-control">
                <div className="col-sm-12 col-md-12 col-lg-3 row2-image">
                    <div className="res-image">
                        <img src="images/Hotelspaport/hotelspa1port.jpeg" alt="" className="res-img img-fluid" />
                    </div>
                </div>

                <div className=" col-sm-12 col-md-12 col-lg-9 column-control">
                    <div className="container">
                        <div className="row bg-secondary">
                            <div className="col-sm-12 col-md-6 col-lg-3 phase1-card ">
                                <div className="phase1-image">
                                    <a href="#" className="phase1-img-href">
                                        <img src="images/Hotelroomland/hotelroom10land.jpg" alt="" className="phase1-img" />
                                    </a>

                                    <div className="phase1-box">20K /Night</div>
                                </div>

                                <div className="phase1-info">
                                    <div className="phase1-head"><h4 className='phase1-h4' >Deluxe Suite</h4></div>
                                    <div className="phase1-h5"><h6>Victorira Island, Lagos</h6></div>
                                    
                                    <div className="phase1-view-flex">
                                        <div className="phase1-views"><p>247, 593 Views</p></div>
                                        <div className="phase1-line"></div>
                                        <div className="phase1-like"><i class="fa fa-regular fa-thumbs-up"></i> 78%</div>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-6 col-lg-3 phase1-card">

                                <div className="phase1-image">
                                    <a href="#" className="phase1-img-href">
                                        <img src="images/Hotelroomland/hotelroom10land.jpg" alt="" className="phase1-img" />
                                    </a>

                                    <div className="phase1-box">20K /Night</div>
                                </div>
                                

                                <div className="phase1-info">
                                    <div className="phase1-head"><h4 className='phase1-h4' >Deluxe Suite</h4></div>
                                    <div className="phase1-h5"><h6>Victorira Island, Lagos</h6></div>
                                    
                                    <div className="phase1-view-flex">
                                        <div className="phase1-views"><p>247, 593 Views</p></div>
                                        <div className="phase1-line"></div>
                                        <div className="phase1-like"><i class="fa fa-regular fa-thumbs-up"></i> 78%</div>
                                    </div>
                                
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-6 col-lg-3 phase1-card">
                                <div className="phase1-image">
                                    <a href="#" className="phase1-img-href">
                                        <img src="images/Hotelroomland/hotelroom10land.jpg" alt="" className="phase1-img" />
                                    </a> 

                                    <div className="phase1-box">20K /Night</div>
                                </div>

                                <div className="phase1-info">
                                    <div className="phase1-head"><h4 className='phase1-h4' >Deluxe Suite</h4></div>
                                    <div className="phase1-h5"><h6>Victorira Island, Lagos</h6></div>
                                    
                                    <div className="phase1-view-flex">
                                        <div className="phase1-views"><p>247, 593 Views</p></div>
                                        <div className="phase1-line"></div>
                                        <div className="phase1-like"><i class="fa fa-regular fa-thumbs-up"></i> 78%</div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* ----Third row---- */}
            <div className="row row2-control">
                <div className="col-sm-12 col-md-12 col-lg-3 row2-image">
                    <div className="res-image">
                        <img src="images/Hotelspaport/hotelspa1port.jpeg" alt="" className="res-img img-fluid" />

                        
                    </div>

                    
                </div>

                <div className=" col-sm-12 col-md-12 col-lg-9 column-control">
                    <div className="container">
                        <div className="row bg-secondary">
                            <div className="col-sm-12 col-md-6 col-lg-3 phase1-card">
                                <div className="phase1-image">
                                    <a href="#" className="phase1-img-href">
                                        <img src="images/Hotelroomland/hotelroom10land.jpg" alt="" className="phase1-img" />
                                    </a>

                                    <div className="phase1-box">20K /Night</div>
                                </div>

                                <div className="phase1-info">
                                    <div className="phase1-head"><h4 className='phase1-h4' >Deluxe Suite</h4></div>
                                    <div className="phase1-h5"><h6>Victorira Island, Lagos</h6></div>
                                    
                                    <div className="phase1-view-flex">
                                        <div className="phase1-views"><p>247, 593 Views</p></div>
                                        <div className="phase1-line"></div>
                                        <div className="phase1-like"><i class="fa fa-regular fa-thumbs-up"></i> 78%</div>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-6 col-lg-3 phase1-card">

                                <div className="phase1-image">
                                    <a href="#" className="phase1-img-href">
                                        <img src="images/Hotelroomland/hotelroom10land.jpg" alt="" className="phase1-img" />
                                    </a>

                                    <div className="phase1-box">20K /Night</div>
                                </div>
                                

                                <div className="phase1-info">
                                    <div className="phase1-head"><h4 className='phase1-h4' >Deluxe Suite</h4></div>
                                    <div className="phase1-h5"><h6>Victorira Island, Lagos</h6></div>
                                    
                                    <div className="phase1-view-flex">
                                        <div className="phase1-views"><p>247, 593 Views</p></div>
                                        <div className="phase1-line"></div>
                                        <div className="phase1-like"><i class="fa fa-regular fa-thumbs-up"></i> 78%</div>
                                    </div>
                                
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-6 col-lg-3 phase1-card">
                                <div className="phase1-image">
                                    <a href="#" className="phase1-img-href">
                                        <img src="images/Hotelroomland/hotelroom10land.jpg" alt="" className="phase1-img" />
                                    </a> 

                                    <div className="phase1-box">20K /Night</div>
                                </div>

                                <div className="phase1-info">
                                    <div className="phase1-head"><h4 className='phase1-h4' >Deluxe Suite</h4></div>
                                    <div className="phase1-h5"><h6>Victorira Island, Lagos</h6></div>
                                    
                                    <div className="phase1-view-flex">
                                        <div className="phase1-views"><p>247, 593 Views</p></div>
                                        <div className="phase1-line"></div>
                                        <div className="phase1-like"><i class="fa fa-regular fa-thumbs-up"></i> 78%</div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





            {/* --------Start of row 4 ------ */}
            {/* <div className="row row2-control">
                <div className="col-sm-12 col-md-12 col-lg-3 row2-image">
                    <div className="res-image">
                        <img src="images/Hotelspaport/hotelspa1port.jpeg" alt="" className="res-img img-fluid" />

                        
                    </div>
                </div>

                <div className=" col-sm-12 col-md-12 col-lg-9 column-control">
                    <div className="container">
                        <div className="row bg-secondary">
                            <div className="col-sm-12 col-md-6 col-lg-3 phase1-card">
                                <div className="phase1-image">
                                    <a href="#" className="phase1-img-href">
                                        <img src="images/Hotelroomland/hotelroom10land.jpg" alt="" className="phase1-img" />
                                    </a>

                                    <div className="phase1-box">20K /Night</div>
                                </div>

                                <div className="phase1-info">
                                    <div className="phase1-head"><h4 className='phase1-h4' >Deluxe Suite</h4></div>
                                    <div className="phase1-h5"><h6>Victorira Island, Lagos</h6></div>
                                    
                                    <div className="phase1-view-flex">
                                        <div className="phase1-views"><p>247, 593 Views</p></div>
                                        <div className="phase1-line"></div>
                                        <div className="phase1-like"><i class="fa fa-regular fa-thumbs-up"></i> 78%</div>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-6 col-lg-3 phase1-card">

                                <div className="phase1-image">
                                    <a href="#" className="phase1-img-href">
                                        <img src="images/Hotelroomland/hotelroom10land.jpg" alt="" className="phase1-img" />
                                    </a>

                                    <div className="phase1-box">20K /Night</div>
                                </div>
                                

                                <div className="phase1-info">
                                    <div className="phase1-head"><h4 className='phase1-h4' >Deluxe Suite</h4></div>
                                    <div className="phase1-h5"><h6>Victorira Island, Lagos</h6></div>
                                    
                                    <div className="phase1-view-flex">
                                        <div className="phase1-views"><p>247, 593 Views</p></div>
                                        <div className="phase1-line"></div>
                                        <div className="phase1-like"><i class="fa fa-regular fa-thumbs-up"></i> 78%</div>
                                    </div>
                                
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-6 col-lg-3 phase1-card">
                                <div className="phase1-image">
                                    <a href="#" className="phase1-img-href">
                                        <img src="images/Hotelroomland/hotelroom10land.jpg" alt="" className="phase1-img" />
                                    </a> 

                                    <div className="phase1-box">20K /Night</div>
                                </div>

                                <div className="phase1-info">
                                    <div className="phase1-head"><h4 className='phase1-h4' >Deluxe Suite</h4></div>
                                    <div className="phase1-h5"><h6>Victorira Island, Lagos</h6></div>
                                    
                                    <div className="phase1-view-flex">
                                        <div className="phase1-views"><p>247, 593 Views</p></div>
                                        <div className="phase1-line"></div>
                                        <div className="phase1-like"><i class="fa fa-regular fa-thumbs-up"></i> 78%</div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}



            <div className="">
                <div className="map-control">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d58638.656367692216!2d7.51122327710097!3d6.448408081909062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sng!4v1683621297720!5m2!1sen!2sng" width="600" height="450" style={{border: '0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='Hotel'></iframe>
                </div>
            </div>

        </div>
    </div>
  )
}
