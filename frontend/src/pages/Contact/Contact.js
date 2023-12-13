import Navbar from '../../components/Navbar/Navbar';
import './contact.css';

export default function Contact() {
  return (
    <div>
        <Navbar/>
        <div className="container-fluid">   
            <div className="row mt-5">
                <div className="col-sm-12 col-md-12 col-lg-5">
                    <div className="contact-control1">
                        <div className="contact-head"><h3 className="contact-h3">Contact Information</h3></div>

                        <textarea className='contact-textarea' name="" id="" cols="58" rows="5">Say something to start a live chat</textarea>

                        <div className="contact-info">
                            <div className="contact-details">
                                <div className="details-icon"><i class="details-i fa fa-solid fa-phone-volume" ></i></div>

                                <div className="details-head"><h5 className="details-h5">+234 902 047 4648</h5></div>
                            </div>

                            <div className="contact-details">
                                <div className="details-icon"><i class="details-i bi bi-envelope"></i></div>

                                <div className="details-head"><h5 className="details-h5">info@cwwafricainternprojects.com</h5></div>
                            </div>

                            <div className="contact-details">
                                <div className="details-icon"><i class="details-i bi bi-geo-alt"></i></div>

                                <div className="details-head"><h5 className="details-h5">524B Ademola Alakija Street, Victoria Island, Lagos, Nigeria. </h5></div>
                            </div>
                        </div>

                        <div className="contact-socials">
                            <div className="contact-icon">
                                <i className="contact-i bi bi-twitter"></i>
                            </div>

                            <div className="contact-icon">
                                <i className ="contact-i bi bi-facebook" ></i>
                            </div>

                            <div className="contact-icon">
                                <i className ="contact-i bi bi-instagram" ></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-sm-12 col-md-12 col-lg-7'>
                    <div className="row ">
                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <div className="form-control">
                                <label htmlFor="" className="contact-label">First Name</label>
                                <input type="text"  className="contact-input" />
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <div className="form-control">
                                <label htmlFor="" className="contact-label">Last Name</label>
                                <input type="text"  className="contact-input" />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <div className="form-control">
                                <label htmlFor="" className="contact-label">Email</label>
                                <input type="email"  className="contact-input" />
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <div className="form-control">
                                <label htmlFor="" className="contact-label">Phone Number</label>
                                <input type="number"  className="contact-input" />
                            </div>
                        </div>
                    </div>

                 
                    <div className="form-control2">
                        <label htmlFor="" className="contact-label">Message</label>
                        <textarea name="" placeholder='book' cols="30" rows="1" id="" className="textarea-message">Write a Message...</textarea>
                    </div>
                   

                    <div className="contact-button">
                        <button type='submit' className="contact-btn">Send A Message</button>
                    </div>
                </div>
            </div>
        </div>

        {/* 07063324235 */}
    </div>
  )
}
