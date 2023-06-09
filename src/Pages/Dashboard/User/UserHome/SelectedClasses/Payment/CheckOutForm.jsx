import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useQuery } from "react-query";
import useAuth from "../../../../../../Hooks/useAuth";
import useSecureAxios from "../../../../../../Hooks/useSecureAxios";
import { toast } from "react-toastify";

const CheckOutForm = ({ item }) => {
  const { price, _id } = item;
  const stripe = useStripe();
  const elements = useElements();

  const { user } = useAuth();
  const secureAxios = useSecureAxios();

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
    }
    if (paymentIntent.status === "succeeded") {
      // store payment info in DB
      // TODO: make design

      const paymentInfo = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        date: new Date(),
        status: "paid",
        classesId: _id,
      };

      secureAxios.post("/payments", paymentInfo).then((res) => {
        if (res?.data?.insertedId) {
          toast.success("successfully paid");
        }
      });
    }
  };

  return (
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
  );
};

export default CheckOutForm;
