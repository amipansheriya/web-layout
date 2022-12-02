import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './addmission.css';

function Addmission()
{
    return(
        <div className='addmission'>
            <div className='row g-0'>
                <div className='col-sm-12 col-md-6 form1'>
                    <div className='campus-header row'>
                        <p className='sub-head col-12'>form</p>
                        <h1 className='s-main-head col-12'>addmission</h1>
                    </div><br></br>
                    <div className='row'>
                        <div className='col-2 key'>name</div>
                        <div className='col-1 form-s'>:</div>
                        <div className='col-9 val email-s'>
                            <input type="text" placeholder='enter first name'></input>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2 key'>email</div>
                        <div className='col-1 form-s'>:</div>
                        <div className='col-9 val email-s'>
                            <input type="text" placeholder='enter your email'></input>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2 key'>birth</div>
                        <div className='col-1 form-s'>:</div>
                        <div className='col-9 val email-s'>
                            <input type="text" placeholder='enter your birth date [DD-MM-YY]'></input>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2 key'>gender</div>
                        <div className='col-1 form-s'>:</div>
                        <div className='col-9 val gender'>
                            <div className='radio'>
                                <input type='radio' name='g'></input><label>male</label>&nbsp;&nbsp;
                                <input type='radio' name='g'></input><label>female</label>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2 key'>hobby</div>
                        <div className='col-1 form-s'>:</div>
                        <div className='col-9 val radio'>
                            <input type="checkbox"></input><label>reading</label>&nbsp;&nbsp;
                            <input type="checkbox"></input><label>writting</label>&nbsp;&nbsp;
                            <input type="checkbox"></input><label>sport</label><br></br>
                            <input type="checkbox"></input><label>singing</label>&nbsp;&nbsp;
                            <input type="checkbox"></input><label>cooking</label>&nbsp;&nbsp;
                        </div>
                    </div>
                    <div className='add-btn row'>
                        <button className='col-12'>
                            submit
                        </button>
                    </div>
                </div>
                <div className='d-sm-none col-md-6 d-md-block add-img1'>
                    <img src={require('./images/form.png')}></img>
                </div>
            </div>
        </div>
    );
}
export default Addmission;