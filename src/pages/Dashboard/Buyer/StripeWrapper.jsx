
import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../../../components/Product/payment/CheckOutForm";



const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

const StripeWrapper = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default StripeWrapper;