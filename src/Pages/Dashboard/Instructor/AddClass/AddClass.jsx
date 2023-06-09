import { useForm } from "react-hook-form";
import CampBtn from "../../../../components/Shared/CampBtn";
import SectionHeading from "../../../../components/Shared/SectionHeading";

const AddClass = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <SectionHeading>Add a Class</SectionHeading>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-3xl space-y-6 mx-auto bg-base-300 p-16"
      >
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
              type="text"
              className="input input-bordered w-full"
              defaultValue={`instructor`}
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
              type="text"
              className="input input-bordered w-full"
              defaultValue={`instructorEmail`}
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
          <CampBtn>Add Class</CampBtn>
        </div>
      </form>
    </div>
  );
};

export default AddClass;
