import React from 'react';

const Loader = () => {
    return (
        <div className='flex h-96  my-10 items-center align-middle'>
            <progress className="progress w-56"></progress>
        </div>
    );
};

export default Loader;