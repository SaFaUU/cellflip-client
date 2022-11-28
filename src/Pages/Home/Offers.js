import React from 'react';

const Offers = () => {
    const cards = []
    for (let i = 0; i < 4; i++) {
        cards.push(i)
    }
    return (
        <div className='grid lg:grid-cols-4 gap-5 my-10 '>
            <div className="rounded-xl bg-base-100 shadow-lg flex items-center align-middle justify-center">
                <figure className='w-1/3'><img src="https://pngimg.com/uploads/iphone_11/iphone_11_PNG14.png" alt="Album" /></figure>
                <div className="card-body w-1/2 p-5">
                    <h2 className="card-title text-xl font-bold">Catch amazing Deals on Iphone</h2>
                    <div className="card-actions justify-center mt-2">
                        <button className="btn btn-secondary btn-sm">Shop Now</button>
                    </div>
                </div>
            </div>
            <div className="rounded-xl bg-base-100 shadow-lg flex items-center align-middle justify-center">
                <figure className='w-1/3'><img src="https://assets.stickpng.com/images/61d4a2048b51e20004664d46.png" alt="Album" /></figure>
                <div className="card-body w-1/2 p-5">
                    <h2 className="card-title text-xl font-bold">Catch amazing Deals on Redmi</h2>
                    <div className="card-actions justify-center mt-2">
                        <button className="btn btn-secondary btn-sm">Shop Now</button>
                    </div>
                </div>
            </div>
            <div className="rounded-xl bg-base-100 shadow-lg flex items-center align-middle justify-center">
                <figure className='w-1/3'><img src="https://ghost-armor.com/media/catalog/product/cache/f9b262cccfc4db316b94156ff62f9953/g/a/galaxy_s20_5.png" alt="Album" /></figure>
                <div className="card-body w-1/2 p-5">
                    <h2 className="card-title text-xl font-bold">Catch amazing Deals on Samsung</h2>
                    <div className="card-actions justify-center mt-2">
                        <button className="btn btn-secondary btn-sm">Shop Now</button>
                    </div>
                </div>
            </div>
            <div className="rounded-xl bg-base-100 shadow-lg flex items-center align-middle justify-center">
                <figure className='w-1/3'><img src="https://www.pngall.com/wp-content/uploads/4/Realme-PNG.png" alt="Album" /></figure>
                <div className="card-body w-1/2 p-5">
                    <h2 className="card-title text-xl font-bold">Catch amazing Deals on Realme</h2>
                    <div className="card-actions justify-center mt-2">
                        <button className="btn btn-secondary btn-sm">Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offers;