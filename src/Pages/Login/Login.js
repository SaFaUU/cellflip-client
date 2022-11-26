import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const { signInWithGoogle, signIn } = useContext(AuthContext)
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate()
    const handleLogin = (data) => {
        console.log(data)
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate('/')
            })
            .catch(err => console.error(err))
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user)
                const userData = {
                    email: user.email,
                    role: 'user',
                    name: user.displayName,
                }
                if (user && user?.uid) {
                    fetch('http://localhost:5000/user', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(userData),
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            navigate('/')
                        })
                }
            })
            .catch(err => console.error(err))
    }
    return (
        <div className="hero my-32">
            <div className="hero-content flex-col w-1/2">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl text-center font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(handleLogin)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email")} placeholder="email" className="input input-bordered" type='email' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register("password")} placeholder="password" className="input input-bordered" type='password' />
                                <label className="label text-left">
                                    <p>
                                        Dont have an account?
                                        <Link to='/signup' className="link link-hover ml-1 text-primary underline">Sign Up </Link>
                                    </p>

                                </label>
                            </div>
                            <div className="form-control mt-2">
                                <input className="btn btn-primary" type="submit" value='Login' />
                            </div>
                        </form>
                        <button onClick={handleGoogleSignIn} className="btn btn-outline">Login with Google <FcGoogle className='text-lg ml-2'></FcGoogle></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;