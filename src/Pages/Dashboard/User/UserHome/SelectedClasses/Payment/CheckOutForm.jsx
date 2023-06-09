import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useQuery } from "react-query";
import useAuth from "../../../../../../Hooks/useAuth";
import useSecureAxios from "../../../../../../Hooks/useSecureAxios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const CheckOutForm = ({ item }) => {
  const [paymentErr, setPaymentErr] = useState("");
  const { price } = item;
  const stripe = useStripe();
  const elements = useElements();

  const navigate = useNavigate();

  const { user } = useAuth();
  const secureAxios = useSecureAxios();

  // get client secret
  const { data: clientSecret } = useQuery({
    queryKey: ["clientSecret", price, user?.email],
    queryFn: async () => {
      const { data } = await secureAxios.post(
        `/create-payment-intent?email=${user?.email}`,
        { price }
      );
      return data.clientSecret;
    },
    enabled: Boolean(price && user),
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setPaymentErr(error?.message);
    } else {
      console.log("paymentMethod", paymentMethod);
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
      setPaymentErr(confirmError?.message);
    }
    if (paymentIntent?.status === "succeeded") {
      // store payment info in DB

      // TODO: make design and show error
      // eslint-disable-next-line no-unused-vars
      const { _id, seats, enrolledStudents, ...rest } = item;

      const paymentInfo = {
        email: user?.email,
        transactionId: paymentIntent.id,
        date: new Date(),
        status: "paid",
        seats: seats - 1,
        enrolledStudents: enrolledStudents + 1,
        ...rest,
      };

      secureAxios.post("/payments", paymentInfo).then((res) => {
        if (res?.data?.insertedId) {
          toast.success("successfully paid");
          navigate("/dashboard/enrolled-classes");
        }
      });
    }
  };

  return (
    <>
      {paymentErr && <p className="text-red-500 mb-2">{paymentErr}</p>}
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          className="btn btn-primary"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
    </>
  );
};

export default CheckOutForm;
