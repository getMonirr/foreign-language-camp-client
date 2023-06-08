import { useForm } from "react-hook-form";
import SocialLogin from "../../components/Shared/SocialLogin";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import putUser from "../../API/putUser";

const Registration = () => {
  const { createUser, logOut } = useAuth();
  const [error, setError] = useState("");
  const [isShow, setIsShow] = useState(false);
  const [isShowConfirm, setIsShowConfirm] = useState(false);

  // for navigation
  const navigate = useNavigate();

  // handle show password
  const handleShowPassword = () => {
    setIsShow(!isShow);
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    // TODO: more work watch with password validation and confirm password
    // password validation
    const REGEX = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Z\d@$!%*?&]{6,}$/;
    const isValid = REGEX.test(data?.password);

    if (!isValid)
      return setError(
        "password must be 6 char long, at lest one Capital letter and special character"
      );
    if (data?.password !== data?.confirm_password) {
      return setError("your password Does not match");
    }
    // create user
    if (data?.email && isValid) {
      createUser(data?.email, data?.password)
        .then((result) => {
          // update user name and photoUrl
          if (result?.user) {
            updateProfile(result?.user, {
              displayName: data?.name,
              photoURL: data?.photoUrl,
            })
              .then(async () => {
                const loggedUser = result?.user;

                // create user info
                const newUser = {
                  email: loggedUser?.email,
                  name: loggedUser?.displayName || "unknown",
                  role: "user",
                };

                // put user in database
                const serverRes = await putUser(newUser);
                if (serverRes?.upsertedCount) {
                  toast.success("Registration successful, login now", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  });

                  // logout & navigate user
                  logOut();
                  navigate("/login");
                }
              })
              .catch((err) => {
                setError(err?.message);
              });
          }
        })
        .catch((err) => {
          setError(err?.message);
        });
    }
  };

  // render field
  const renderField = (type, labelName, req = true) => {
    let testType;
    testType =
      type === "password" && labelName === "confirm_password"
        ? isShowConfirm
          ? "text"
          : "password"
        : type === "password"
        ? isShow
          ? "text"
          : "password"
        : type;

    return (
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text capitalize font-bold">
            {labelName}
            {req ? <span className="text-red-500">*</span> : "(optional)"}
          </span>
        </label>
        <input
          {...register(`${labelName}`, { required: req })}
          type={testType}
          placeholder={labelName}
          className="input input-bordered"
          required={req}
        />
      </div>
    );
  };
  return (
    <div className="hero min-h-[calc(100vh-100px)] bg-camp-bg-2 py-8">
      <div className="hero-content w-4/12">
        <div className="card flex-shrink-0 w-full max-w-5xl shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="text-center space-y-4">
              <h3 className="font-camp-dis text-4xl font-semibold text-camp-primary">
                Welcome to Registration
              </h3>
              <p className="font-camp-mon text-2xl font-semibold text-camp-secondary">
                Please Register
              </p>
              {error && <p className="text-red-500">{error}</p>}
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {renderField("text", "name")}
              {renderField("email", "email")}
              <div className="md:flex gap-4 justify-between">
                <div>
                  {renderField("password", "password")}
                  <div className="form-control">
                    <label className="label cursor-pointer justify-start gap-4">
                      <input
                        onChange={handleShowPassword}
                        type="checkbox"
                        className="checkbox"
                      />
                      <span className="label-text">Show Password</span>
                    </label>
                  </div>
                  {
                    <p className={`${error && "text-red-500"} mt-2`}>
                      *
                      {error ||
                        "Password must be 6 char long, at lest one Capital letter and special character"}
                    </p>
                  }
                </div>
                <div>
                  {renderField("password", "confirm_password")}
                  <div className="form-control">
                    <label className="label cursor-pointer justify-start gap-4">
                      <input
                        onClick={() => setIsShowConfirm(!isShowConfirm)}
                        type="checkbox"
                        className="checkbox"
                      />
                      <span className="label-text">Show Password</span>
                    </label>
                  </div>
                </div>
              </div>
              {renderField("url", "photoUrl")}
              <div className="md:flex gap-4 justify-between">
                {renderField("number", "phone_number", false)}
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text font-bold">
                      Gender(optional)
                    </span>
                  </label>
                  <select
                    {...register("gender")}
                    className="select select-bordered"
                    defaultValue="pick one"
                  >
                    <option disabled>pick one</option>
                    <option>male</option>
                    <option>female</option>
                    <option>others</option>
                  </select>
                </div>
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold">
                    Your Address(optional)
                  </span>
                </label>
                <textarea
                  {...register("address")}
                  className="textarea textarea-bordered h-24"
                  placeholder="Address"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn btn-primary bg-camp-primary hover:bg-camp-secondary hover:border-camp-secondary hover:text-camp-primary rounded-none hover:rounded-lg mt-6 mb-3"
                >
                  Login
                </button>
              </div>
            </form>
            <div>
              <p>
                Already an account?{" "}
                <span className="text-camp-secondary">
                  <Link to="/login">Login here</Link>
                </span>
              </p>
            </div>
            <div>
              <div className="divider my-8">OR</div>
              <div className="mb-6">
                <SocialLogin />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
