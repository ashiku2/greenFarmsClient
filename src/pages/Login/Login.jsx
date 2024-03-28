import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';


const Login = () => {
    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true);


    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const { signIn } = useContext(AuthContext);

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Login Successful",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true });
            })
    }

    const handleCaptcha = (e) => {
        const value = e.target.value;
        if (validateCaptcha(value)) {
            setDisabled(false);
        }
    }

    return (
        <>
            <Helmet>
                <title>GreenFarms | Login</title>
            </Helmet>
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-2/3 md:w-1/2 bg-white rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <img src="https://i.ibb.co/WctNk9Q/612x612-4885-33d664f3f240d5331b398bbe4ee99f8f-1610031569istockphoto466175630612x-removebg-preview.png" alt="" />

                    </div>
                    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Login</h2>

                        <form action="" onSubmit={handleLogin}>

                            <div className="relative mb-4">
                                <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                                <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative mb-4">
                                <label for="password" className="leading-7 text-sm text-gray-600">Password</label>
                                <input type="text" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative mb-4">
                                <label className="leading-7 text-sm text-gray-600"><LoadCanvasTemplate /></label>
                                <input onBlur={handleCaptcha} ref={captchaRef} type="text" name="captcha" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Type text above' />
                                
                            </div>
                            <input type='submit' disabled={disabled} className="btn btn-primary" value={"Login"}/>
                        </form>
                        <p className="text-xs text-gray-500 mt-3">Don't have any account? <Link to="/signup">Register</Link></p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;