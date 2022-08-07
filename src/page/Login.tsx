import '../styles/style.css';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { AiOutlineLock } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';

interface LoginType {}

const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Clicked');
    };

    return (
        <section>
            <div className="container py-5">
                <div className="row shadow-lg rounded-3 g-0">
                    <div className="col-lg-6 d-flex justify-content-center align-items-center py-5 rounded-start text-white" style={{ backgroundColor: '#4D4DFF' }}>
                        <img src="./assets/Desktop-01.png" className="img-fluid" alt="art-work" />
                    </div>
                    <div className="col-lg-6 d-flex justify-content-center py-5 bg-white">
                        <div className="text-center">
                            <h2 className="text-md mb-1">Hello Again!</h2>
                            <div className="gray-text mb-5">test test test test test</div>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4 input-group ">
                                    <input type="email" placeholder="Email" className="form-control" />
                                    <span className="input-group-text bg-white">
                                        <MdOutlineAlternateEmail />
                                    </span>
                                </div>
                                <div className="mb-4 input-group ">
                                    <input type="password" placeholder="Password" className="form-control" />
                                    <span className="input-group-text bg-white">
                                        <AiOutlineLock />
                                    </span>
                                </div>
                                <div className="mb-5 d-flex justify-content-between align-items-center">
                                    <div className="form-check">
                                        <input type="checkbox" name="remember" className="form-check-input " />
                                        <label className="form-check-label" style={{ fontSize: '12px' }} htmlFor="">
                                            Remember
                                        </label>
                                    </div>
                                    <a href="" style={{ fontSize: '12px', textDecoration: 'none' }}>
                                        Recovery Password
                                    </a>
                                </div>
                                <div className="mb-3">
                                    <button type="submit" className="btn-color rounded border-0 p-2 w-100 hover" onClick={() => navigate('/profile')}>
                                        Login{' '}
                                    </button>
                                </div>
                                <div className="mb-3">
                                    <button type="submit" className="btn-social rounded p-2 w-100 d-flex justify-content-center align-items-center bg-white ">
                                        <span className="btn-label">
                                            <FcGoogle size={25} />
                                        </span>
                                        Sign in with Google{' '}
                                    </button>
                                </div>
                            </form>
                            <div className="mt-4 gray-text ">
                                Don't have an account yet?<a href="">Sign Up</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
