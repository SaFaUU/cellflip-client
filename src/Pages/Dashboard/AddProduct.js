import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useUser from '../../Hooks/useUser';

const AddProduct = () => {
    const { user } = useContext(AuthContext)
    const [dbUser] = useUser(user?.email)
    const { register, handleSubmit } = useForm();
    const [categories, setCategories] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/categories')
            .then(data => {
                console.log(data.data);
                setCategories(data.data)
            })
    }, [])

    const handleAddProduct = (data) => {
        const productToAdd = {
            productName: data.productName,
            sellerName: dbUser.name,
            sellerId: dbUser._id,
            description: data.description,
            location: data.location,
            phone: data.phone,
            category: data.category,
            price: data.price,
            time: new Date(),
            advertiseEnable: false,
            availability: true,
        }
        console.log(productToAdd);
    }
    return (
        <div className="hero my-10">
            <div className="hero-content flex-col w-1/2">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl text-center font-bold">Add Product</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(handleAddProduct)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Name</span>
                                </label>
                                <input {...register("productName")} placeholder="name" className="input input-bordered" type='text' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <select {...register("category", { required: true })}
                                    className='input input-bordered'>

                                    {
                                        categories.map(category => <option value={category._id}>{category.name}</option>)
                                    }
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input {...register("price")} placeholder="password" className="input input-bordered" type='text' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Location</span>
                                </label>
                                <input {...register("location")} placeholder="password" className="input input-bordered" type='text' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input {...register("phone")} placeholder="password" className="input input-bordered" type='text' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea {...register("description")} className='input input-bordered h-16 pt-2' placeholder="Description" />
                            </div>

                            <div className="form-control mt-2">
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