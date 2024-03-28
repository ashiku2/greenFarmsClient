import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useNavigate, useLocation } from "react-router-dom";
import axios from 'axios';
import useAxiosSecure from '../../../hooks/useAxiosSecure';


const PopularItemCards = ({ item }) => {
    const { name, image, price, recipe, _id } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const axiosSecure = useAxiosSecure();

    const handleAddToCart = food => {
        if (user && user.email) {
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added to your cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
            })


        } else {
            Swal.fire({
                title: "You are not logged in.",
                text: "Login to add to card",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Log in!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state:{from:location}});
                }
            });
        }
    }
    
    return (
        <>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={image} />
                </a>
                <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY: {recipe}</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">{name}</h2>
                    <p className="mt-1">{price}tk</p>
                </div>
                <button onClick={() => handleAddToCart(item)} className='btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4'>Add to Cart</button>
            </div>
        </>
    );
};

export default PopularItemCards;