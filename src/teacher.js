import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import './teacher.css';



function Teacher()
{
    return(
        <>
            <div className='teacher'>
                <div className='campus-header row'>
                    <p className='sub-head col-12'>professional</p>
                    <h1 className='s-main-head col-12'>our good teachers</h1>
                    <p className='campus-head-para col-12 d-sm-none d-md-block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus elit aliquam facilisis pharetra. Aenean consectetur lacinia diam a tincidunt. Vivamus facilisis lacus non velit suscipit pellentesque. Nam ac mauris nec mi lobortis sollicitudin sed at lacus.</p>
                </div>
                <div className='row bg-pic'>
                    <div className='col-12 t-pic'>



                    <OwlCarousel items={1}  
                            className="owl-theme"  
                            loop  
                            nav  
                            margin={8} >  
                            <div >
                                        <div className='t-slider'>
                                                <div className='t-imgs col-12'>
                                                    <img src={require('./images/t1.png')}></img>
                                                </div>
                                                <p className='t-para col-12'>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus elit aliquam facilisis pharetra. Aenean consectetur lacinia diam a tincidunt. Vivamus facilisis lacus non velit suscipit pellentesque. 
                                                </p>
                                                <p className='t-name'>Katey Gallardo</p>
                                                <p className='t-sub'>MUSIC TEACHER</p>
                                            </div>
                                        </div>  
                            <div>
                                        <div className='t-slider'>
                                                <div className='t-imgs col-12'>
                                                    <img src={require('./images/t2.png')}></img>
                                                </div>
                                                <p className='t-para col-12'>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus elit aliquam facilisis pharetra. Aenean consectetur lacinia diam a tincidunt. Vivamus facilisis lacus non velit suscipit pellentesque. 
                                                </p>
                                                <p className='t-name'>John Doe</p>
                                                <p className='t-sub'>GEOLOGY TEACHER</p>
                                            </div>
                                        </div>  
                            
                            
                        </OwlCarousel>
                        
                    </div>
                </div>
            </div>
        </>


    );
}
export default Teacher;