import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './About.css';
import Footer from './Footer';
import Header from './header';
import img from './images/icon_tree_rev_svg.svg';

function About()
{
    return(
        <>
            <div className='about'>
                <div className='row'>
                    <div className='col-9 about-txt-img col-sm-12 col-md-9'>
                        <div className='row'>
                            <div className='col-7  about-txt about-con col-sm-12 col-md-6'>
                                <div className="about-header">
                                    <h1>about rightedu</h1>
                                </div>
                                <div className='about-para'>
                                    <p>
                                    Loyola University Maryland is a Jesuit, Catholic University committed to the educational and spiritual traditions of the Society of Jesus and the development of the whole person. Accordingly, the University inspires students to learn, lead, and serve in a diverse and changing world.
                                    </p>
                                    <p>At Loyola, the ideals that have guided Jesuit universities for nearly 500 years—academic excellence, cura personalis, service, justice, diversity, and integrity—among others, continue to mold the academic, social, and spiritual experiences we offer our students, the programs we pursue, and the relationships we build with the communities that surround us.</p>
                                </div>

                                <div className='year'>
                                    <h1>
                                        1852
                                    </h1>
                                </div>
                                <div className='about-para'>
                                <p>
                                    Loyola University Maryland was founded in Baltimore, Md., by the Society of Jesus as the first institution of   higher learning in the United States to bear St. Ignatius of Loyola's name.
                                </p>
                                </div>
                                <hr></hr>
                            </div>
                            <div className='col-5 offset-md-1 about-img about-con col-sm-12 col-md-5'>
                                <div className='a-img'>
                                    <img src={require('./images/about1.jpg')}></img>
                                </div>
                                <div className='img-box'>
                                    <h3 className='img-box-txt'>Strong Truths</h3>
                                    <p>At Loyola, Strong Truths Well Lived is more than a motto</p>
                                    <button className='watch'>watch</button>
                                </div>
                            </div>

                            <div className='our-campus col-sm-12 g-4'>
                                <div className='campus-img'>
                                    <div className='campus-box'>
                                        <h6 className='box-head'>
                                            our campus
                                        </h6>
                                        <img src={img}/>
                                        <p className='a-campus-para'>
                                        Loyola's main campus is located in a <br></br> residential neighborhood in north Baltimore
                                        </p>
                                        <button className='about-campus-btn'>
                                            explore our campus
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='col-3 about-sider d-sm-none d-md-block'>
                        <ul className='about-mainmenu'>
                            <li><a href="#">president and leadership</a></li>
                            <li><a href="#">mission and vision</a></li>
                            <li><a href="#">strategic planning</a></li>
                            <li><a href="#">history and tradition</a></li>
                            <li><a href="#">ranking and accolades</a></li>
                            <li><a href="#">aout rightedu community</a></li>
                            <li><a href="#">directions and parking</a></li>
                        </ul>
                        <div className='more-detail'>
                            <h3>Explore More</h3>
                                <div className='m-more-detail'>
                                    <ul className='more-detail-menu'>
                                        <li><a href='#'>university profile</a></li>
                                        <li><a href='#'>equity and  inclusin</a></li>
                                        <li><a href='#'>what is the jesuit</a></li>
                                        <li><a href='#'>difference?</a></li>
                                        <li><a href='#'>consumer information</a></li>
                                    </ul>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default About;