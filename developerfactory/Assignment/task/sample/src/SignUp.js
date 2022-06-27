import './SignUP.css';
function SignUp() {
    return (
        <div>
            <div className="row_container">
                <div className="row">
                    <h2>login</h2>
                    <div className='row_1'>< label>matrimony id/mobile no/email</label><input type="text" /></div>
                    <div className='row_2'><label>password</label><input type="password" /></div>
                    <div className='row_3'><input type="checkbox" /><label>keep me logged in</label></div>
                    <div className='row_4'><button type="button">login</button> </div>
                    <div className='row_5'><button type="button">forgot password</button>
                        <button type="button">login via OTP</button></div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;