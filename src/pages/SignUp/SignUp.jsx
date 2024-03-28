import React, { useContext, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';




const SignUp = () => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();


    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                    console.log('user profile info updated')
                    })
                    .catch(error => console.log(error))
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Profile created successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/');
            })
        .catch(error=>console.log(error))
    }







    return (
        <>
            <Helmet>
                <title>GreenFarms | SignUp</title>
            </Helmet>
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-2/3 md:w-1/2 bg-white rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <img src="https://i.ibb.co/WctNk9Q/612x612-4885-33d664f3f240d5331b398bbe4ee99f8f-1610031569istockphoto466175630612x-removebg-preview.png" alt="" />

                    </div>
                    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Register</h2>

                        <form action="" onSubmit={handleSubmit(onSubmit)}>

                            <div className="relative mb-4">
                                <label for="Name" className="leading-7 text-sm text-gray-600">Name</label>
                                <input type="text" id="name" name="name" {...register("name", { required: true })} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                {errors.name && <span>This field is required</span>}
                            </div>
                            <div className="relative mb-4">
                                <label for="url" className="leading-7 text-sm text-gray-600">Photo URL</label>
                                <input type="text" id="url" name="url" {...register("photoURL", { required: true })} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                {errors.name && <span>This field is required</span>}
                            </div>

                            <div className="relative mb-4">
                                <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                                <input type="email" {...register("email", { required: true })} id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                {errors.email && <span>This field is required</span>}
                            </div>
                            <div className="relative mb-4">
                                <label for="password" className="leading-7 text-sm text-gray-600">Password</label>
                                <input type="text" {...register("password", {
                                    required: true, minLength: 6, maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                {errors.password?.type == 'required' && <span>This field is required</span>}
                                {errors.password?.type == 'minLength' && <span>Minimum 6 characters is required</span>}
                                {errors.password?.type == 'maxLength' && <span>Maximum 20 characters is required</span>}
                                {errors.password?.type == 'pattern' && <span>password must have 1 upper, 1 lower, 1 digit and 1 special character</span>}
                            </div>

                            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Register</button>
                        </form>
                        <p className="text-xs text-gray-500 mt-3">Already have an account? <Link to="/login">Login</Link></p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SignUp;