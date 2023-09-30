import './booking2.css';
import { useState } from 'react';

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 800) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...Read More" : " Show Less"}
      </span>
    </p>
  );
};

export default function Booking2() {
  return (
    <div>
        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, similique! */}
        <div className="container-fluid">
            <div className="booking1-head">
                <div className="booking1-title"><h3>An Elegant Room with Wifi and Air Conditioning</h3></div>
            </div>
            
            <div className="row book1-row1">
                <div className="col-sm-12 col-md-12 col-lg-6 book1-col">
                    <div className="book1-image">
                        <img src="images/Hotelroomland/hotelroom1land.jpg" alt="" className="book1-img"/>
                    </div>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-6 book1-col">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6 book1-sub-col">
                            <div className="column1-image">
                                <img src="images/Hotelroomland/hotelroom2land.jpg" alt="" className="col-img" />
                            </div>
                        </div>
                        
                        <div className="col-sm-12 col-md-6 col-lg-6 ">
                            <div className="column1-image">
                                <img src="images/Hotelroomland/hotelroom3land.jpg" alt="" className="col-img" />
                            </div>
                        </div>
                    </div>


                    <div className="row row-control">
                        <div className="col-sm-12 col-md-6 col-lg-6 book1-sub-col">
                            <div className="column1-image">
                                <img src="images/Hotelroomland/hotelroom4land.jpg" alt="" className="col-img" />
                            </div>
                        </div>
                        
                        <div className="col-sm-12 col-md-6 col-lg-6 ">
                            <div className="column1-image">
                                <img src="images/Pool/pool1land.jpg" alt="" className="col-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* ----Start of second row----- */}
            <div className="row book1-row5">
                <div className="col-sm-12 col-md-12 col-lg-6">
                    <div className="book1-left-col">
                        <div className="book1-left-head">
                            <h3>Room in a Fascinating and Serene Environment</h3>
                        </div>

                        <div className="book1-left-divs">
                            <div className="little-div1">
                                <i class="book1-left-i fa fa-solid fa-bed"></i>
                                <h6 className='little-h6' > Double bed</h6>
                            </div>

                            <div className="little-div2">
                                <i class="book1-left-i fa fa-solid fa-bath"></i> 
                                <h6 className='little-h6' >2 Bathrooms</h6>
                            </div>

                            <div className="little-div3">
                                <i class="book1-left-i fa-solid fa-water-ladder"></i>
                                <h6 className='little-h6' > Swimming pool</h6>
                            </div>
                        </div>

                        <div className="book1-left-head"><h3>About this Place</h3></div>

                        <div className="book1-left-para">
                            <ReadMore>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut iure minus expedita? Perspiciatis sapiente obcaecati, necessitatibus ratione consequuntur rerum quod temporibus sed sit, dicta deserunt cupiditate debitis commodi cum doloribus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi beatae numquam error quae atque debitis, distinctio esse laborum iure voluptates cupiditate exercitationem officia vero culpa repudiandae! Obcaecati earum fugiat voluptate maxime rem hic debitis dicta esse, deserunt laborum molestias blanditiis fugit quidem, modi ea consectetur adipisci consequuntur soluta quisquam vero doloremque! A cum maxime sit explicabo voluptate fugiat itaque reiciendis eos qui, quas molestiae quos quia illum placeat. Aliquid minus optio nobis non harum perferendis suscipit totam placeat fugit, et voluptatum soluta cumque error magni. Aperiam doloribus, quo atque magnam, facere delectus corrupti vero laboriosam nostrum architecto velit officia reprehenderit!
                            </ReadMore>
                        </div>
                    </div>
                </div>

                <span className="span-book1-line"></span>

                <div className="col-sm-12 col-md-12 col-lg-6">
                    <div className="book1-right-col">
                        <div className="book1-left-head">
                            <h3>Show what this place offers</h3>
                        </div>

                        <div className="book1-right-amenities">
                            <div className="right-control">
                                <div className="book1-right-icons">
                                    <i class="book1-right-i bi bi-person-workspace"></i>
                                </div>

                                <div className="book1-right-info">
                                    <h5 className='book1-right-h5' >Dedicated Workspace</h5>
                                </div>

                            </div>

                            <div className="right-control">
                                <div className="book1-right-icons">
                                    <i class="book1-right-i bi bi-person-workspace"></i>
                                </div>

                                <div className="book1-right-info">
                                    <h5 className='book1-right-h5' >Dedicated Workspace</h5>
                                </div>

                            </div>

                            <div className="right-control">
                                <div className="book1-right-icons">
                                    <i class="book1-right-i bi bi-person-workspace"></i>
                                </div>

                                <div className="book1-right-info">
                                    <h5 className='book1-right-h5' >Dedicated Workspace</h5>
                                </div>

                            </div>

                            <div className="right-control">
                                <div className="book1-right-icons">
                                    <i class="book1-right-i bi bi-person-workspace"></i>
                                </div>

                                <div className="book1-right-info">
                                    <h5 className='book1-right-h5' >Dedicated Workspace</h5>
                                </div>

                            </div>

                            <div className="right-control">
                                <div className="book1-right-icons">
                                    <i class="book1-right-i bi bi-person-workspace"></i>
                                </div>

                                <div className="book1-right-info">
                                    <h5 className='book1-right-h5' >Dedicated Workspace</h5>
                                </div>

                            </div>

                            <div className="right-control">
                                <div className="book1-right-icons">
                                    <i class="book1-right-i bi bi-person-workspace"></i>
                                </div>

                                <div className="book1-right-info">
                                    <h5 className='book1-right-h5' >Dedicated Workspace</h5>
                                </div>

                            </div>

                            <div className="right-control">
                                <div className="book1-right-icons">
                                    <i class="book1-right-i bi bi-person-workspace"></i>
                                </div>

                                <div className="book1-right-info">
                                    <h5 className='book1-right-h5' >Dedicated Workspace</h5>
                                </div>

                            </div>
                        </div>

                        <div className="book1-right-button">
                            <button className="book1-right-btn">Show all 26 Amenities</button>
                        </div>
                    </div>
                </div>

            </div>



            {/* ----Start of third row---- */}
            <div className="row book1-row6">
                <div className="col-sm-12 col-md-12 col-lg-6">
                    <div className="book1-left-col6 ">
                        <div className="pref-head">
                            <h3 className='pay-h3'>Confirm Payment</h3>
                        </div>

                        <div className="book1-left-amenities">
                            <div className="book1-left-cont">
                                <div className="book1-pay-info">
                                    <h5 className="book1-pay-h5">Check in</h5>
                                </div>

                                <div className="book1-pay-icons1">
                                    <i class="book1-pay-i fa fa-regular fa-calendar"></i>
                                </div>
                            </div>

                            <div className="book1-left-cont">
                                <div className="book1-pay-info">
                                    <h5 className="book1-pay-h5">Guests</h5>
                                </div>

                                <div className="book1-pay-icons2">
                                    <i class="book1-pay-i fa fa-regular fa-user"></i>
                                </div>
                            </div>
                        </div>

                        <div className="pref-line"></div>

                        <div className="book1-left-pref">
                            <div className="pref-head"><h3 className='pay-h3' >Payment Preference</h3></div>

                            <form className='form-guard' action="">
                                <div className="form-control">
                                    <div className="form-head">
                                        <h3 className='form-h3' >Full Payment</h3>
                                    </div>

                                    <label class="toggle">
                                        <input class="toggle-input" type="checkbox" />
                                        <span class="toggle-label" data-off="OFF" data-on="ON"></span>
                                        <span class="toggle-handle"></span>
                                    </label>

                                    <div className="form-head special-h3">
                                        <h3 className='form-h3' >Part Payment</h3>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>


                <div className="col-sm-12 col-md-12 col-lg-6">
                    <div className="book1-fam-col">
                        <div className="right-fam1">
                            <div className="fam-image">
                                <img src="images/Hotelroomland/hotelroom1land.jpg" alt="" className="fam-img" />
                            </div>

                            <div className="fam-info">
                                <div className="fam-head">
                                    <h3 className="fam-h3">Family Suite</h3>
                                </div>

                                <div className="fam-head">
                                    <h3 className="fam-para">Independent LY, Enugu</h3>
                                </div>

                                <div className="fam-views">
                                    <p className="fam-text">447, 393 views</p>
                                    <div className="fam-line"></div>
                                    <p className="fam-text"><i class="fa fa-regular fa-thumbs-up"></i> 76%</p>
                                </div>
                            </div>

                            <span className="fam-line2"></span>

                            <div className="right-fam2-head"><h3>Payment Details</h3></div>

                            <div className="right-fam2">
                                <div className="amountX">
                                    <div className="fam-head">
                                        <h3 className="fam-para">Payment/Night</h3>
                                    </div>

                                    <div className="fam-head">
                                        <h3 className="fam-para1">N 11,000.00</h3>
                                    </div>
                                </div>

                                <div className="amount">
                                    <div className="fam-head">
                                        <h3 className="fam-para">Cleaning Services</h3>
                                    </div>

                                    <div className="fam-head">
                                        <h3 className="fam-para2">N 2,750.00</h3>
                                    </div>
                                </div>

                                <div className="amount">
                                    <div className="fam-head">
                                        <h3 className="fam-para">7.5% Tax</h3>
                                    </div>

                                    <div className="fam-head">
                                        <h3 className="fam-para3">N 1,250.00</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="fam-line3"></div>

                            <div className="right-fam3">
                               
                                <div className="amount2">
                                    <div className="fam-head2">
                                        <h3 className="fam-paraA">Total(N)</h3>
                                    </div>

                                    <div className="fam-head">
                                        <h3 className="fam-paraB">N 15,000.00</h3>
                                    </div>
                                </div>

                                <div className="right-fam-button">
                                    <a href="#" className="fam-href">Book now</a>
                                </div>
                           
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
