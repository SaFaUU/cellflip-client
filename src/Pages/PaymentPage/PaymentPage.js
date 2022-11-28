import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
const PaymentPage = () => {
    const bookingData = useLoaderData()
    console.log(bookingData)
    return (
        <div>
            <Elements stripe={stripePromise}>
                <CheckoutForm
                    bookingData={bookingData}
                ></CheckoutForm>
            </Elements>
        </div>
    );
};

export default PaymentPage;