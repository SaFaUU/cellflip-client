import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { Result } from 'postcss';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';

const CheckoutForm = ({ bookingData }) => {
    const navigate = useNavigate()
    const { price, buyerName, buyerEmail, productName, productId, buyerPhone, _id } = bookingData;
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://cellflip-server.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data.clientSecret)
                setClientSecret(data.clientSecret)
            });
    }, []);

    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('')
    const [success, setSuccess] = useState('')
    const [processing, setProcessing] = useState(false)
    const [transactionId, setTransactionId] = useState('')




    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCardError(error.message)
        }
        else {
            setCardError('')
        }

        setSuccess('');
        setProcessing(true)


        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: buyerName,
                        email: buyerEmail
                    },
                },
            },
        );
        if (confirmError) {
            setCardError(confirmError.message);
            return;
        }
        if (paymentIntent.status === 'succeeded') {
            const payment = {
                price,
                transactionId: paymentIntent.id,
                buyerEmail,
                productName,
                buyerName,
                productId,
                buyerPhone,
                bookingId: _id,
            }
            fetch('https://cellflip-server.vercel.app/payments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('token')}`,
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        setSuccess('Congrats! Your payment is completed')
                        setTransactionId(paymentIntent.id)
                        toast.success('Payment was Succesfull')

                    }
                })
        }
        navigate('/dashboard/my-orders')
        setProcessing(false)

    }
    return (
        <div>
            <div className="hero my-32">
                <div className="hero-content flex-col w-1/2">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl text-center font-bold">Pay now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-control">
                                    <label className="label mb-5">
                                        <span className="label-text font-bold">Fill Out the Information Below</span>
                                    </label>
                                    <CardElement
                                        options={{
                                            style: {
                                                base: {
                                                    fontSize: '16px',
                                                    color: '#424770',
                                                    '::placeholder': {
                                                        color: '#aab7c4',
                                                    },
                                                },
                                                invalid: {
                                                    color: '#9e2146',
                                                },
                                            },
                                        }}
                                    />
                                </div>

                                <button className='btn btn-primary px-5 w-full  mt-5' type="submit" disabled={!stripe || !clientSecret || processing}>
                                    Pay
                                </button>
                            </form>
                            <p className='text-red-500'>
                                {
                                    cardError
                                }
                            </p>
                            {
                                success && <div>
                                    <p className='text-green-500'>{success}</p>
                                    <p className='text-green-500'>Your transactionId: <span className='font-bold'>{transactionId}</span></p>
                                </div>
                            }

                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default CheckoutForm;