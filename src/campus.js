import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './campus.css';
import cam1 from './images/campus-online.jpg';

function Campus()
{
    return(
        <>
            <div className='campus container'>
                <div className='campus-header row'>
                    <p className='sub-head col-12'>introduction</p>
                    <h1 className='s-main-head col-12'>welcome to our campus</h1>
                    <p className='campus-head-para col-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus elit aliquam facilisis pharetra. Aenean consectetur lacinia diam a tincidunt. Vivamus facilisis lacus non velit suscipit pellentesque. Nam ac mauris nec mi lobortis sollicitudin sed at lacus.</p>
                </div>
                <div className='campus-intro row g-4'>
                    <div className='col-sm-12 col-md-4'>
                        <div className=' c-box '>
                            <div className='c-img c-img1'>
                                <div className='c-intro'>
                                    <i class="bi bi-laptop"></i>
                                    <p className='cp1'>learn online</p>
                                    <p className='cp2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu nisl</p>
                                    <a href="#">read more</a>
                                </div>
                            </div>                            
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-4'>
                        <div className=' c-box '>
                            <div className='c-img c-img2'>
                                <div className='c-intro'>
                                    <i class="bi bi-book-half"></i>
                                    <p className='cp1'>use our library</p>
                                    <p className='cp2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu nisl</p>
                                    <a href="#">read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-4'>
                        <div className=' c-box '>
                            <div className='c-img c-img3'>
                                <div className='c-intro'>
                                    <i class="bi bi-trophy-fill"></i>
                                    <p className='cp1'>scholership</p>
                                    <p className='cp2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu nisl</p>
                                    <a href="#">read more</a>
                                </div>
                            </div>
                        </div>
                    </div>   
                </div>
                <div className='row text-center'>
                    <div className='col-12'> 
                        <button className='c-btn'>view more</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Campus;