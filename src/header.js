import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './header.css';
import video from './images/bg-vodeo.mp4';
import logo from './images/logo.jpg';
import shield from './images/shield-tree.svg';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Home';



function Header() {
    return (
        <>
            {/* <div className='site-b'></div> */}
            <div className='row m-0'>
                <div className='slider col-12'>
                    <video className='bg-video' autoPlay loop={20} muted src={require('./images/bg-vodeo.mp4')}></video>
                </div>
                <div className='header col-12'>
                    <div className=' container headline'>
                        <div className='row align-items-center'>
                            <div className='logo col-6 col-sm-12 col-md-6 text-md-start'>
                                <img src={require('./images/rightedu2.png')}></img>
                            </div>
                            <div className=' col-6 d-sm-none d-md-block'>
                                <div className='contact'>
                                    <div className='call contact-d'>
                                        <div className='con-i'>
                                            <i className="bi bi-telephone-inbound"></i>
                                        </div>
                                        <div className='con-d'>
                                            <p className='con-d'>call-us</p>
                                            <p className='con-v'>+123 456 678 890</p>
                                        </div>
                                    </div>
                                    <div className='mail contact-d'>
                                        <div className='con-i'>
                                            <i className="bi bi-envelope"></i>
                                        </div>
                                        <div className='con-d'>
                                            <p className='con-d'>e-mail</p>
                                            <p className='con-v'>info@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className='location contact-d'>
                                        <div className='con-i'>
                                            <i className="bi bi-geo-alt"></i>
                                        </div>
                                        <div className='con-d'>
                                            <p className='con-d'>location</p>
                                            <p className='con-v'>+123 456 678 890</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='container'>
                        <div className='navbar'>
                            <div className='row'>
                                <div className='col-auto menubar'>
                                    <ul className='mainmenu d-sm-none d-md-block'>
                                        {/* <li className='home'><a href='/Home'>home</a></li> */}
                                        <li className='home'><Link to="/">Home</Link></li>
                                        <li><a href='/About'>about</a></li>
                                        <li><a href='/Register'>addmission</a></li>
                                        <li><a href='/Blog'>blog</a></li>
                                        <li><a href='/contact'>contact</a></li>
                                    </ul>
                                    <div className="d-sm-inline-block d-md-none menu1 text-left"><i class="bi bi-list"></i></div>
                                </div>
                                <div className=' col-justify-sm-center col-4 social-i'>
                                    <a className='s-icons'><i className="bi bi-twitter"></i></a>
                                    <a className='s-icons'><i className="bi bi-facebook"></i></a>
                                    <a className='s-icons'><i className="bi bi-instagram"></i></a>
                                    <a className='s-icons'><i className="bi bi-cart-plus-fill"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='slidetxt'>
                    <div className='s-txt row'>
                        <p className='sub-head col-12'>choose the best</p>
                        <h1 className='s-main-head col-12'>education for <br></br>your future</h1>
                    </div>
                </div>

            </div>

        </>
    );
}
export default Header;