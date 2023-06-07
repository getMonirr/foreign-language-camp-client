
import SocialLogin from "../../components/Shared/SocialLogin";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="hero min-h-[calc(100vh-100px)] bg-camp-bg-2">
      <div className="hero-content w-3/12">
        <div className="card flex-shrink-0 w-full max-w-5xl shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="text-center space-y-4">
              <h3 className="font-camp-dis text-4xl font-semibold text-camp-primary">
                WellCome Back
              </h3>
              <p className="font-camp-mon text-2xl font-semibold text-camp-secondary">
                {" "}
                Please login
              </p>
            </div>
            <form className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
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
                Your are new here?{" "}
                <span className="text-camp-secondary">
                  <Link to="/registration">Registration here</Link>
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
