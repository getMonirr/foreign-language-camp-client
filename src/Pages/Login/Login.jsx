import { useForm } from "react-hook-form";
import SocialLogin from "../../components/Shared/SocialLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const [error, setError] = useState("");
  const { loginUser } = useAuth();
  // for navigation
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    if (data?.email && data?.password) {
      loginUser(data?.email, data?.password)
        .then((result) => {
          if (result.user) {
            toast.success("Log in successful", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            // navigate user
            navigate(from);
          }
        })
        .catch((err) => {
          setError(err?.message);
        });
    }
  };
  return (
    <div className="hero min-h-[calc(100vh-100px)] bg-camp-primary-hover py-8">
      <div className="hero-content w-3/12">
        <div className="card flex-shrink-0 w-full max-w-5xl shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="text-center space-y-4">
              <h3 className="font-camp-dis text-4xl font-semibold text-camp-primary">
                WellCome Back
              </h3>
              <p className="font-camp-mon text-2xl font-semibold text-camp-secondary">
                Please login
              </p>
              {error && <p className="text-red-500">{error}</p>}
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { require: true })}
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", { require: true })}
                />
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn btn-primary bg-camp-primary hover:bg-camp-secondary hover:border-camp-secondary hover:text-white rounded-none hover:rounded-lg mt-6 mb-3"
                >
                  Login
                </button>
              </div>
            </form>
            <div>
              <p>
                Your are new here?{" "}
                <span className="text-camp-secondary">
                  <Link to="/sign-up">Registration here</Link>
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

export default Login;
