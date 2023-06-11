import { useQuery } from "react-query";
import CampContainer from "../../../../../components/Shared/CampContainer";
import SectionHeading from "../../../../../components/Shared/SectionHeading";
import useAuth from "../../../../../Hooks/useAuth";
import useSecureAxios from "../../../../../Hooks/useSecureAxios";
import moment from "moment/moment";

const PaymentHistory = () => {
  const { user } = useAuth();
  const secureAxios = useSecureAxios();

  const { data: paymentHistory = [] } = useQuery({
    queryKey: ["paymentHistory", user?.email],
    queryFn: async () => {
      const { data } = await secureAxios(`/payments?email=${user?.email}`);
      return data;
    },
  });
  return (
    <div>
      <SectionHeading title="My Payment history">Check all payment history</SectionHeading>
      <CampContainer>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="bg-camp-primary text-white">
                <th>ClassDetails</th>
                <th>Instructor Details</th>
                <th>Price</th>
                <th>Date</th>
                <th>TrnxId</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {(paymentHistory &&
                Array.isArray(paymentHistory) &&
                paymentHistory.length > 0 &&
                paymentHistory.map((item) => (
                  <tr key={item._id}>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={item.image} alt={item.name} />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{item.name}</div>
                          <div className="text-sm opacity-50">
                            {item.rating}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {item.instructor}
                      <br />
                      <span className="badge badge-ghost badge-sm">
                        {item.instructorEmail}
                      </span>
                    </td>
                    <td>${item.price}</td>
                    <td>{moment(item.date).format('MMMM Do YYYY, h:mm a')}</td>

                    <td>{item.transactionId}</td>
                    <td>Paid</td>
                  </tr>
                ))) ||
                (paymentHistory.length <= 0 && (
                  <tr className="text-center">{"Payment History not Found"}</tr>
                )) ||
                "Payment History not Found"}
            </tbody>
          </table>
        </div>
      </CampContainer>
    </div>
  );
};

export default PaymentHistory;
