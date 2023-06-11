import { useForm } from "react-hook-form";
import CampBtn from "../../../../components/Shared/CampBtn";
import SectionHeading from "../../../../components/Shared/SectionHeading";
import useAuth from "../../../../Hooks/useAuth";
import { getImgUrl } from "../../../../API/getImgUrl";
import { useState } from "react";
import { useMutation } from "react-query";
import useSecureAxios from "../../../../Hooks/useSecureAxios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FaPlusCircle } from "react-icons/fa";

const AddClass = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { user } = useAuth();
  const secureAxios = useSecureAxios();

  const mutation = useMutation({
    mutationKey: ["classes", user?.email],
    mutationFn: async (singleClass) => {
      const { data } = await secureAxios.post(
        `/classes?email=${user?.email}`,
        singleClass
      );
      return data;
    },
    onSuccess: (data) => {
      if (data?.insertedId) {
        toast.success("successfully added");
        navigate("/dashboard/my-classes");
      }
    },
  });

  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const imgUrl = await getImgUrl(data?.image[0]);
    if (imgUrl) {
      data.image = imgUrl;
      data.price = parseFloat(data?.price);
      data.seats = parseInt(data?.seats);
      const singleClass = {
        ...data,
        status: "pending",
        enrolledStudents: 0,
      };
      // post server
      mutation.mutate(singleClass);
    } else {
      setError("img server lost, please try again");
    }
  };
  return (
    <div>
      <SectionHeading title="Add a Class">
        you can add your class, we add some content automatically
      </SectionHeading>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-3xl space-y-6 mx-auto bg-base-300 p-16"
      >
        <div>
          <p className="text-red-500">{error}</p>
        </div>
        <div className="lg:flex items-end justify-center gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">
                Class Name <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="class name"
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text font-bold">
                Class Picture <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input file-input-bordered w-full"
            />
          </div>
        </div>
        <div className="lg:flex items-center justify-center gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">
                Instructor Name <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              {...register("instructor")}
              type="text"
              className="input input-bordered w-full"
              defaultValue={`${user?.displayName}`}
              readOnly
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">
                Instructor Email <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              {...register("instructorEmail")}
              type="text"
              className="input input-bordered w-full"
              defaultValue={`${user?.email}`}
              readOnly
            />
          </div>
        </div>
        <div className="lg:flex items-center justify-center gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">
                Available seats <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              {...register("seats", { required: true })}
              type="number"
              className="input input-bordered w-full"
              placeholder="seats"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">
                Price <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              {...register("price", { required: true })}
              type="number"
              className="input input-bordered w-full"
              placeholder="price"
            />
          </div>
        </div>
        <div type="submit" className="text-end">
          <CampBtn>Add Class <FaPlusCircle/></CampBtn>
        </div>
      </form>
    </div>
  );
};

export default AddClass;
