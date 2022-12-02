import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Routes, Route } from "react-router-dom";
import './blog.css';

function Blog()
{
    return(
        <>
            <div className='campus container'>
                <div className='campus-header row'>
                    <p className='sub-head col-12'>blog</p>
                    <h1 className='s-main-head col-12'>blog</h1>
                    <p className='campus-head-para col-12 d-sm-none d-md-block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus elit aliquam facilisis pharetra. Aenean consectetur lacinia diam a tincidunt. Vivamus facilisis lacus non velit suscipit pellentesque. Nam ac mauris nec mi lobortis sollicitudin sed at lacus.</p>
                </div>
                <div className='campus-intro row g-4'>
                    <div className='col-sm-12 col-md-4'>
                        <div className=' c-box '>
                            <div className='c-img c-img1'>
                                <div className='c-intro'>
                                    <i class="bi bi-laptop"></i>
                                    <p className='cp1'>best jobs for our graduate</p>
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
                                    <p className='cp1'>best way use our library</p>
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
                                    <p className='cp1'>news</p>
                                    <p className='cp2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu nisl</p>
                                    <a href="#">read more</a>
                                </div>
                            </div>
                        </div>
                    </div>   
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
                                    <p className='cp1'>photography</p>
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
                                    <p className='cp1'>team building work</p>
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
    );
}
export default Blog;