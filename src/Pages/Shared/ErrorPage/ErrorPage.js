import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <div id="error-page" className='flex flex-col h-screen align-middle justify-center'>
            <img src="https://media1.giphy.com/media/8L0Pky6C83SzkzU55a/200w.gif?cid=6c09b952bkbq4bsznqjch4udx4sm3898oxdxcjds65o14c3y&rid=200w.gif&ct=g" alt="" className='w-1/5 mx-auto' />
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <Link className='btn btn-accent w-1/6 mx-auto mt-10' to='/'>Home</Link>
        </div>
    );
};

export default ErrorPage;