import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({price}) => {
    const stripePrice = price * 100;
    const publishableKey = 'pk_test_0ptwEpgZMfMRPJsbHYf68BuR00KUvPzkzU';

    const onToken = token => {
        console.log(token);
        alert('Payment Success');
    };

    return (
        <StripeCheckout
            label='Pay now'
            name='Test Payment Checkout'
            image='https://svgshare.com/i/CUz.svg'
            shippingAddress
            billingAddress
            description={`Your total is $${price}`}
            amount={stripePrice}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeButton;