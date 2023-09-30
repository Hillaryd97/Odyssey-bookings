import React, { useState } from 'react'
import styled from 'styled-components';
import {Link} from "react-router-dom";
import './popup.css';

const Popup = ({onClose}) => {
    // console.log(props.somepop);

        const [isPopupOpen, setIsPopupOpen] = useState(false);

        const openPopup = () => {
            setIsPopupOpen(true);
        };

        const closePopup = () => {
            setIsPopupOpen(false);
        };

  return (
    <>
        {/* {props.somepop === "open" ? */}
            <div className="tester">
                <Container>
                    <div className="login-popup">
                        <div className="popup-overlay"></div>
                        <div className="login-top">
                            <div className="login-close-btn" onClick={onClose}>
                                <div className="login-cl-btn">&times;</div>
                            </div>
                            <div className="login-title">
                                <h6 className="login-head">Log in</h6>
                            </div>
                        </div>

                        <div className="login-line"></div>

                        <div className="login-control">
                            <h5 className="login-h5">Welcome to the Odyssey Bookings</h5>

                            <form action="">
                                <div className="form-guard">
                                    <input type="text" placeholder='Email' className="login-input" />
                                    <input type="text" placeholder='Password' className="login-pass" />
                                    <button type='submit' className="login-button">Log in</button>
                                    
                                    <div className="login-extra">
                                        <Link to='/'>
                                            <div className="pass-button">
                                                <button onClick={openPopup}  type='submit' className=" pass-href">Forgot password</button>
                                                {isPopupOpen && <Popup onClose={closePopup}/>} 
                                            </div>
                                        </Link>

                                        <Link to='/'>
                                            <div className="pass-button"> 
                                                <button type='submit' className="pass-href">Sign up</button>   
                                                                                             
                                            </div>
                                        </Link>


                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </Container>
            </div>
            {/* :
            ""} */}
        
    </>
  );
}

const Container = styled.div`
position: absolute; 
height: 500px;
width: 50%;
left: 50%;
top: 300px;
padding-top: 5rem;
border-radius: 10px;
background: rgba(0, 0, 0, 0.5);
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
-webkit-transform: translate(-50%, -50%);
transform: translate(-50%, -50%);
background-color: #fff;
display:flex;
align-items:center; 
justify-content: center;
z-index: 999;
backdrop-filter: blur(10px);
`;

// document.querySelector(".login-popup .login-top .login-close-btn").addEventListener("click", function() {
//     document.querySelector(".login-popup").classList.remove("active");
// });

export default Popup;
