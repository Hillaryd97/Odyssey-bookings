import './home3.css';

export default function Home3() {
  return (
    <div>
        <div className="container-fluid home-container3">
            <div className="home-field3">
                <div className="home3-head"><h2>Popular Destinations</h2></div>

                <div className="row home-destination">
                    <div className="col-sm-12 col-md-4 col-lg-2 home3-image">
                        <img src="images/Mall/random1land.jpg" alt="" className="home3-img" />
                    </div>

                    <div className="col-sm-12 col-md-4 col-lg-2 home3-image">
                        <img src="images/Mall/random2land.jpg" alt="" className="home3-img" />
                    </div>

                    <div className="col-sm-12 col-md-4 col-lg-2 home3-image">
                        <img src="images/Mall/random3land.jpg" alt="" className="home3-img" />
                    </div>

                    <div className="col-sm-12 col-md-4 col-lg-2 home3-image">
                        <img src="images/Mall/random4land.jpg" alt="" className="home3-img" />
                    </div>

                    <div className="col-sm-12 col-md-4 col-lg-2 home3-image">
                        <img src="images/Mall/random4port.jpg" alt="" className="home3-img" />
                    </div>

                    <div className="col-sm-12 col-md-4 col-lg-2 home3-image">
                        <img src="images/Mall/random5land.jpg" alt="" className="home3-img" />
                    </div>
                </div>


                <div className="home-subscribe-head"><h6>Signup and we will send the best deals to you.</h6></div>
                    
                <form action="" className="form-subscribe3">
                    <div className="row home-subscribe">
                        <div className="col-sm-12 col-md-12 col-lg-8 home-email">
                            <input type="text" className="home3-input" placeholder='Your email address'/>
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-4 home-email">
                            <button type='submit' className="home3-btn">Subscribe</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    </div>
  )
}
