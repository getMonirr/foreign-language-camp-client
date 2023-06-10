import { useMutation, useQuery, useQueryClient } from "react-query";
import useAuth from "../../../../Hooks/useAuth";
import useSecureAxios from "../../../../Hooks/useSecureAxios";
import SectionHeading from "../../../../components/Shared/SectionHeading";
import AdminBtn from "../../../../components/Dashboard/AdminBtn";
import { toast } from "react-toastify";
import { useState } from "react";
import FeedbackModal from "./FeedbackModal";

const ManageClasses = () => {
  const { user } = useAuth();
  const secureAxios = useSecureAxios();
  const [classId, setClassId] = useState(null);

  // for modal
  let [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
    setClassId(null);
  };

  const openModal = (id) => {
    setIsOpen(true);
    setClassId(id);
  };

  const { data: allClasses } = useQuery({
    queryKey: ["allClasses", user?.email],
    queryFn: async () => {
      const { data } = await secureAxios.get(
        `/all-classes?email=${user?.email}`
      );
      return data;
    },
    enabled: Boolean(user?.email),
  });

  // update status
  const updateStatus = async ({ id, status }) => {
    const { data } = await secureAxios.patch(
      `/all-classes/${id}?email=${user?.email}`,
      { status }
    );
    return data;
  };

  // query client
  const queryClient = useQueryClient();

  // mutation
  const mutation = useMutation({
    mutationKey: ["allClasses", user?.email],
    mutationFn: updateStatus,
    onSuccess: (data, { status }) => {
      if (data?.modifiedCount) {
        if (status === "approved") {
          toast.success("Class has been approved.");
        } else if (status === "deny") {
          toast.error("Class has been denied.");
        }
      }
      queryClient.invalidateQueries("allClasses");
    },
  });

  // feedback mutation
  const FeedbackMutation = useMutation({
    mutationKey: ["allClasses", user?.email],
    mutationFn: async ({ id, feedback }) => {
      const { data } = await secureAxios.patch(
        `/all-classes/${id}?email=${user?.email}`,
        { feedback }
      );
      return data;
    },
    onSuccess: (data) => {
      if (data?.modifiedCount) {
        toast.success("Feedback has been send");
      }
      queryClient.invalidateQueries("allClasses");
    },
  });

  // handle deny class
  const handleDenyClass = (id) => {
    mutation.mutate({ id, status: "deny" });
  };

  // handle approved
  const handleApprovedClass = (id) => {
    mutation.mutate({ id, status: "approved" });
  };
  // handle send feedback
  const onSubmit = (data) => {
    FeedbackMutation.mutate({
      id: classId,
      feedback: data?.feedback,
    });
  };

  return (
    <div>
      <SectionHeading>Manage All Classes</SectionHeading>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-center bg-camp-primary text-white">
                <th>#</th>
                <th>Class Details</th>
                <th>Instructor Details</th>
                <th>Available Seats</th>
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {(allClasses &&
                Array.isArray(allClasses) &&
                allClasses.length > 0 &&
                allClasses.map((item, index) => (
                  <tr key={item._id}>
                    <th>{index + 1}</th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={item.image} alt={item.name} />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{item.name}</div>
                          <div className="text-sm opacity-50 text-left">
                            Rating:{" "}
                            {(item?.rating && item?.rating) || "not rating yet"}
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
                    <td>{item.seats}</td>
                    <td>${item.price}</td>
                    <td>{item.status}</td>
                    <th className="text-center">
                      <AdminBtn
                        handleOnClick={() => handleDenyClass(item._id)}
                        className="bg-orange-600 border-orange-500 hover:bg-orange-800 hover:border-orange-300"
                        disabled={
                          item.status === "deny" || item.status === "approved"
                        }
                      >
                        Deny
                      </AdminBtn>
                    </th>
                    <th className="text-center">
                      <AdminBtn
                        handleOnClick={() => handleApprovedClass(item._id)}
                        disabled={
                          item.status === "deny" || item.status === "approved"
                        }
                      >
                        Approve
                      </AdminBtn>
                    </th>
                    <th className="text-center">
                      <AdminBtn handleOnClick={() => openModal(item._id)}>
                        Feedback
                      </AdminBtn>
                    </th>
                  </tr>
                ))) ||
                (allClasses?.length <= 0 && "no classes found") ||
                "no classes found"}
            </tbody>
          </table>
        </div>
      </div>
      <FeedbackModal
        isOpen={isOpen}
        openModal={openModal}
        closeModal={closeModal}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default ManageClasses;
