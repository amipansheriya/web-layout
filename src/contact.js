import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Routes, Route } from "react-router-dom";
import './contact.css';


function Contact()
{
    return(
        <>
            <div className='contact-page row'>
                <div className='contact-form col-12'>
                    <div className='row'>
                        <div className='col-6 form-div col-sm-12 col-md-6'>
                            <div className='form'>
                                <input type='text' placeholder='your name' className='con-txt-box'></input>
                                <input type='text' placeholder='your email' className='con-txt-box'></input>
                                <input type='text' placeholder='your thoughts' className='con-txt-box msg'></input><br></br>
                                <div className='mt-10'>
                                    <input type='submit' value='submit' className='submit-con'></input>
                                </div>
                            </div>
                        </div>
                        <div className='col-1 d-sm-none d-md-block col-md-1 c-line'><div></div></div>
                        <div className='col-5 con-div d-sm-none d-md-flex col-md-5'>
                            <div className='contact-con'>
                                <h1 className='contact-head'>contact</h1>
                                <h1 className='us'>us</h1>
                                <p>At Loyola, the ideals that have guided Jesuit universities for nearly 500 years—academic excellence, cura personalis, service, justice, diversity, and integrity—among others.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Contact;