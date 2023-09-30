import './register.css';
import React from 'react'
import styled from 'styled-components';
import {Link} from "react-router-dom";

const Register = ({onClose}) => {
    // console.log(props.somepop);

  return (
    <>
        {/* {props.somepop === "open" ? */}
            <div className="tester">
                <Container>
                    <div className="register-popup">
                        <div className="popup-overlay"></div>
                        <div className="register-top">
                            <div className="register-close-btn" onClick={onClose}>
                                <div className="register-cl-btn">&times;</div>
                            </div>
                            <div className="register-title">
                                <h6 className="register-head">Register</h6>
                            </div>
                        </div>

                        <div className="register-line"></div>

                        <div className="register-control">
                            <h5 className="register-h5">Welcome to the Odyssey Bookings</h5>

                            <form action="">
                                <div className="form-guard">
                                    <input type="text" placeholder='First Name' className="register-input" />
                                    <input type="text" placeholder='Last Name' className="register-input" />
                                    <input type="email" placeholder='Email' className="register-input" />
                                    <input type="password" placeholder='Password' className="register-input" />
                                    <input type="password" placeholder='Confirm Password' className="register-pass" />
                                    <button type='submit' className="register-button">Create Account</button>
                                    
                                    <div className="register-extra">

                                        <Link to='/' >
                                            <div className="pass-button">
                                                <a href="#" className="pass-href">Log in</a>
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
height: 600px;
width: 50%;
left: 50%;
top: 250px;
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



export default Register;

