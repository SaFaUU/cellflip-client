import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SignUp = () => {
    const { createUser } = useContext(AuthContext)
    const { register, handleSubmit } = useForm();
    const handleRegister = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                const userData = {
                    email: data.email,
                    role: data.role,
                    name: data.name,
                    verified: false,
                }
                if (user && user?.uid) {
                    fetch('http://localhost:5000/user', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('token')}`,
                        },
                        body: JSON.stringify(userData),
                    })
                        .then(res => res.json())
                        .then(data => console.log(data))
                }
            })
            .catch(err => console.error(err))
    }

    return (
        <div className="hero my-32">
            <div className="hero-content flex-col w-1/2">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl text-center font-bold">Sign Up</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(handleRegister)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input {...register("name")} placeholder="name" className="input input-bordered" type='text' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">I am a </span>
                                </label>
                                <select {...register("role", { required: true })}
                                    className='input input-bordered'>
                                    <option value="user">Buyer</option>
                                    <option value="seller">Seller</option>
                                </select>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email")} placeholder="email" className="input input-bordered" type='text' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register("password")} placeholder="password" className="input input-bordered" type='password' />
                                <label className="label text-left">
                                    <p>
                                        Already have an account?
                                        <Link to='/login' className="link link-hover ml-1 text-primary underline">Login </Link>
                                    </p>

                                </label>
                            </div>
                            <div className="form-control mt-2">
                                <input className="btn btn-primary" type="submit" value='Sign Up' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;