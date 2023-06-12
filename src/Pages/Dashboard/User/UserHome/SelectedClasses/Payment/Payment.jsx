import { useParams } from "react-router-dom";
import useSecureAxios from "../../../../../../Hooks/useSecureAxios";
import useAuth from "../../../../../../Hooks/useAuth";
import { useQuery } from "react-query";
import SectionHeading from "../../../../../../components/Shared/SectionHeading";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";
import "./Payment.css";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY);

const Payment = () => {
  const { user } = useAuth();

  const secureAxios = useSecureAxios();
  const { id } = useParams();

  const { data: item } = useQuery({
    queryKey: ["price", id, user?.email],
    queryFn: async () => {
      const { data } = await secureAxios(
        `/selectedCarts/${id}?email=${user?.email}`
      );
      return data;
    },
    enabled: Boolean(id && user),
  });

  return (
    <div>
      {item && (
        <>
          <SectionHeading title="Payment with Card">
            Give your Card details for purchase a class. Example: enter
            424242...
          </SectionHeading>
          <Elements stripe={stripePromise}>
            <CheckOutForm item={item} />
          </Elements>
        </>
      )}
    </div>
  );
};

export default Payment;
