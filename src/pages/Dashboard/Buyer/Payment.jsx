import { useLocation, Navigate } from "react-router";
import CheckoutForm from "../../../components/Product/payment/CheckOutForm";
import StripeWrapper from "./StripeWrapper";

const Payment = () => {
  const { state: orderData } = useLocation();

  if (!orderData) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-xl font-bold mb-4">Pay Now</h2>
      
    
      <StripeWrapper>
        <CheckoutForm order={orderData} />
      </StripeWrapper>
    </div>
  );
};

export default Payment;

