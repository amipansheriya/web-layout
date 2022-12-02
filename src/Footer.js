import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Footer.css';

function Footer()
{
    return(
        <>
            <div className='footer'>
                <div className='container'>
                    <div className='m-footer'>
                        <div className='row g-4'>
                            <div className='col-auto col-sm-12 col-md-3'>
                                <div className='f1'>
                                    <img src={require('./images/rightedu2.png')}></img><br></br>
                                    <button className='footer-btn'>Contact Us</button>
                                </div>
                            </div>
                            <div className='col-auto col-md-3 d-sm-none d-md-block justify-content-sm-center'>
                                <div className='footer-h'>
                                    <h5>main campus</h5>
                                </div>
                                <div className='footer-content'>
                                4501 N. Charles Street<br></br>
                                Baltimore, MD 21210<br></br>
                                410-617-2000 or 1-800-221-9107
                                </div>

                                <br></br>
                                <div className='footer-h'>
                                    <h5>TIMONIUM GRADUATE CENTER</h5>
                                </div>
                                <div className='footer-content'>
                                2034 Greenspring Drive<br></br>
                                Timonium, MD 21093<br></br>
                                410-617-1903
                                </div>

                                <br></br>
                                <div className='footer-h'>
                                    <h5>COLUMBIA GRADUATE CENTER</h5>
                                </div>
                                <div className='footer-content'>
                                8890 McGaw Road<br></br>
                                Columbia, MD 21045<br></br>
                                410-617-7600
                                </div>
                            </div>
                            <div className='col-sm-12 col-md-6'>
                                <div className='footer-h third'>
                                    <h5>FOLLOW RIGHTedu <i className='back'>\\\</i></h5>
                                    <div className='social-icon'>
                                        <i class="bi bi-facebook"></i>
                                        <i class="bi bi-twitter"></i>
                                        <i class="bi bi-instagram"></i>
                                        <i class="bi bi-youtube d-sm-none"></i>
                                        <i class="bi bi-linkedin d-sm-none"></i>
                                        <a href='#' className='d-sm-none'>All Social Media</a>
                                    </div>
                                </div>
                                <div className='f-l'>
                                    <div className="row">
                                        <div className="col-4 col-sm-12">
                                            <hr></hr>
                                            undergraduate addmission
                                            <hr></hr>
                                            graduate addmission
                                            <hr></hr>
                                            majors & minors
                                        </div>
                                        <div className="col-4 col-sm-12">
                                            <hr></hr>
                                            direction and parking
                                            <hr></hr>
                                            clinical center
                                            <hr></hr>
                                            calenders
                                        </div>
                                        <div className="col-4 col-sm-12">
                                            <hr></hr>
                                            A - Z index
                                            <hr></hr>
                                            Imergency information
                                            <hr></hr>
                                            work and loyola
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Footer;