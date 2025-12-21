import { CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import { useLocation, useNavigate } from "react-router";
// import axios from "axios";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();

  const order = location.state; 

  if (!order) return <p className="text-center mt-10">No order found!</p>;

  const handlePay = async (e) => {
    e.preventDefault();

    // 1️⃣ create payment intent
    const res = await axiosSecure.post("/create-payment-intent", {
      amount: order.totalPrice,
    });

    const clientSecret = res.data.clientSecret;

    // 2️⃣ confirm payment
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (result.error) {
      Swal.fire("Error", result.error.message, "error");
      return;
    }

    // 3️⃣ payment success → save order
    await axiosSecure.post("/orders", {
      ...order,
      status: "Approved",
      transactionId: result.paymentIntent.id,
    });

    Swal.fire("Success", "Payment successful!", "success");

    // 4️⃣ redirect
    navigate("/dashboard/my-orders");
  };

  return (
    <form onSubmit={handlePay}>
      <CardElement />
      <button className="btn btn-primary mt-4 w-full">
        Pay ৳{order.totalPrice}
      </button>
    </form>
  );
};

export default CheckoutForm;


