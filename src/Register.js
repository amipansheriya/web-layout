import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Routes, Route } from "react-router-dom";
import './Register.css';
import "bootstrap-icons/font/bootstrap-icons.css";

 function Register()
 {
    return(
        <>
            <div className='register row py-5'>
                <div className='reg-con col-12 pb-5'>
                    <div className='register-head '>
                        <h1>Admission now</h1>
                    </div>
                    <div className='reg-form'>
                        <input type='text' className='txt-box' placeholder='your name'></input>
                        <input type='text' className='txt-box' placeholder='your birth date'></input>
                        <select className='txt-box gender'>
                            <option>select gender</option>
                            <option>male</option>
                            <option>female</option>
                        </select>
                        <input type='text' className='txt-box' placeholder=' your email'></input>
                        <input type='text' className='txt-box' placeholder='your phone number'></input>
                        <select className='txt-box gender course'>
                            <option>select course</option>
                            <option>bca</option>
                            <option>mca</option>
                            <option>bba</option>
                            <option>mba</option>
                        </select>
                        <select className='txt-box gender course-t'>
                            <option>select course time</option>
                            <option>7:30 to 3:00</option>
                            <option>10:00 to 5:30</option>
                        </select>
                        <div className='add-detail'>
                            <h5>Address detail</h5>
                        <input type='text' className='txt-box' placeholder='your address'></input>
                        <input type='text' className='txt-box' placeholder='line'></input>
                        <input type='text' className='txt-box' placeholder='city'></input>
                        <input type='text' className='txt-box' placeholder='zip code'></input>

                        </div>

                        <button className='add-submit'>submit</button>

                    </div>
                </div>     
            </div>
        </>
    );
 }
 export default Register;