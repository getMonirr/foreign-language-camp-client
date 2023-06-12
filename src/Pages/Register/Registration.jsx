import { useForm } from "react-hook-form";
import SocialLogin from "../../components/Shared/SocialLogin";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import putUser from "../../API/putUser";
import { FaEye, FaEyeSlash } from "react-icons/fa";

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

  const { register, handleSubmit, watch } = useForm();
  console.log(watch("password") === watch("confirm_password"));
  console.log(watch("confirm_password"));
  const onSubmit = (data) => {
    // TODO: more work watch with password validation and confirm password
    // password validation
    // const REGEX = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Z\d@$!%*?&]{6,}$/;

    // Minimum 6 characters, at least one uppercase & lowercase letter, one number and special character:
    const REGEX =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    const isValid = REGEX.test(data?.password);

    if (!isValid)
      return setError(
        "Minimum 6 characters, at least one uppercase & lowercase letter, one number and special character"
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
                  image: data?.photoUrl,
                };

                // put user in database
                const serverRes = await putUser(newUser);
                if (serverRes?.insertedId) {
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
    <div className="hero min-h-[calc(100vh-100px)] bg-camp-primary-hover py-8">
      <div className="hero-content lg:w-5/12">
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
              <div className="lg:flex gap-4 justify-between">
                <div>
                  {renderField("password", "password")}
                  <div className="form-control relative">
                    <label
                      className="cursor-pointer absolute right-4 -top-8"
                      onClick={handleShowPassword}
                    >
                      {isShow ? <FaEye /> : <FaEyeSlash />}
                    </label>
                  </div>
                  {
                    <p className={`${error && "text-red-500"} mt-2`}>
                      {error && <span className="text-xs">{error}</span>}
                    </p>
                  }

                  <div className="flex flex-col gap-1">
                    {/^.*[a-z].*$/.test(watch("password")) ? (
                      <span className="text-green-500 text-xs">
                        One lower case latter
                      </span>
                    ) : (
                      <span className="text-red-500 text-xs">
                        One lower case latter
                      </span>
                    )}
                    {/^.*[A-Z].*$/.test(watch("password")) ? (
                      <span className="text-green-500 text-xs">
                        One Upper case latter
                      </span>
                    ) : (
                      <span className="text-red-500 text-xs">
                        One Upper case latter
                      </span>
                    )}
                    {/^.*[@$!%*?&].*$/.test(watch("password")) ? (
                      <span className="text-green-500 text-xs">
                        One Special Character
                      </span>
                    ) : (
                      <span className="text-red-500 text-xs">
                        One Special Character
                      </span>
                    )}
                    {/^.*\d.*$/.test(watch("password")) ? (
                      <span className="text-green-500 text-xs">One number</span>
                    ) : (
                      <span className="text-red-500 text-xs">One number</span>
                    )}
                    {watch("password")?.length >= 6 ? (
                      <span className="text-green-500 text-xs">
                        6 Char long
                      </span>
                    ) : (
                      <span className="text-red-500 text-xs">6 Char long</span>
                    )}
                  </div>
                </div>
                <div>
                  {renderField("password", "confirm_password")}
                  <div className="form-control relative mb-2">
                    <label
                      className="cursor-pointer absolute right-4 -top-8"
                      onClick={() => setIsShowConfirm(!isShowConfirm)}
                    >
                      {isShowConfirm ? <FaEye /> : <FaEyeSlash />}
                    </label>
                  </div>
                  {watch("password") !== watch("confirm_password") ? (
                    <span className="text-red-300 text-xs">Does not match</span>
                  ) : (
                    <span className="text-green-300 text-xs">Matched</span>
                  )}
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
                  className="btn btn-primary bg-camp-primary hover:bg-camp-secondary hover:border-camp-secondary hover:text-white rounded-none hover:rounded-lg mt-6 mb-3"
                >
                  Register
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
