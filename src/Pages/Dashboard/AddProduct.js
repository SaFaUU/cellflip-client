import axios from 'axios';
import { format } from 'date-fns/esm';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useUser from '../../Hooks/useUser';

const AddProduct = () => {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const [dbUser] = useUser(user?.email)
    const { register, handleSubmit } = useForm();
    const [categories, setCategories] = useState([])

    useEffect(() => {
        axios.get('https://cellflip-server.vercel.app/categories')
            .then(data => {
                // console.log(data.data);
                setCategories(data.data)
            })
    }, [handleSubmit])

    const handleAddProduct = (data) => {

        const image = data.image[0]
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgbb_key}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData)
                if (imgData.success) {
                    const productToAdd = {
                        productName: data.productName,
                        sellerName: dbUser.name,
                        sellerMail: user.email,
                        img_url: imgData.data.url,
                        sellerId: dbUser._id,
                        description: data.description,
                        location: data.location,
                        phone: data.phone,
                        category: data.category,
                        price: data.price,
                        date: format(new Date(), 'PP'),
                        advertiseEnable: false,
                        condition: data.condition,
                        purchaseYear: data.purchaseYear,
                        availability: "available",
                        reported: false,
                        originalPrice: data.originalPrice,
                        verifiedSeller: false,
                        sellerImg: dbUser?.img_url ? dbUser?.img_url : user?.photoURL,
                    }
                    console.log(productToAdd);
                    fetch('https://cellflip-server.vercel.app/products', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('token')}`,
                        },
                        body: JSON.stringify(productToAdd),
                    })
                        .then(res => res.json())
                        .then(data => {
                            toast.success('Product added successfully')
                            console.log(data)
                            navigate('/dashboard/my-products')
                        })
                }
            })

    }
    return (
        <div className="hero my-10">
            <div className="hero-content flex-col w-1/2">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl text-center font-bold">Add Product</h1>
                </div>
                <div className="card  w-full shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(handleAddProduct)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Name</span>
                                </label>
                                <input {...register("productName")} placeholder="Product Name" className="input input-bordered" type='text' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <select {...register("category", { required: true })}
                                    className='input input-bordered'>

                                    {
                                        categories.map((category, index) => <option
                                            key={index}
                                            value={category._id}
                                        >{category.name}</option>)
                                    }
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Condition Type</span>
                                </label>
                                <select {...register("condition", { required: true })}
                                    className='input input-bordered'>
                                    <option value='Excellent'>Excellent</option>
                                    <option value='Good'>Good</option>
                                    <option value='Fair'>Fair</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Resale Price</span>
                                </label>
                                <input {...register("price")} placeholder="Price" className="input input-bordered" type='text' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Original Price</span>
                                </label>
                                <input {...register("originalPrice")} placeholder="Original Price" className="input input-bordered" type='text' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Year of Purchase</span>
                                </label>
                                <input {...register("purchaseYear")} placeholder="Year of Purchase" className="input input-bordered" type='text' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Location</span>
                                </label>
                                <input {...register("location")} placeholder="Location" className="input input-bordered" type='text' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input {...register("phone")} placeholder="Phone" className="input input-bordered" type='text' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input type="file" {...register("image")} className="file-input file-input-bordered w-full max-w-xs" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea {...register("description")} className='input input-bordered h-16 pt-2' placeholder="Description" />
                            </div>

                            <div className="form-control mt-5">
                                <input className="btn btn-primary" type="submit" value='Add Product' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;