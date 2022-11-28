import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const AddCategories = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit } = useForm();
    const handleAddProduct = (data) => {
        console.log(data);
        fetch(`http://localhost:5000/add-category?category_name=${data.categoryName}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('token')}`,
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <div className="hero my-10">
            <div className="hero-content flex-col w-1/2">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl text-center font-bold">Add Category</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(handleAddProduct)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Category Name</span>
                                </label>
                                <input {...register("categoryName")} placeholder="name" className="input input-bordered" type='text' />
                            </div>

                            <div className="form-control mt-5">
                                <input className="btn btn-primary" type="submit" value='Add Category' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCategories;