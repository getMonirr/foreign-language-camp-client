import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();

  // for navigation
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  // handle google sign in
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        if (result?.user) {
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
      .catch((err) => console.log(err));
  };

  return (
    <button
      onClick={handleGoogleSignIn}
      className="btn flex justify-center items-center w-full hover:bg-camp-primary rounded-none hover:rounded-lg hover:text-white"
    >
      <FcGoogle className="h-8 w-8 mr-5" />
      Continue with google
    </button>
  );
};

export default SocialLogin;
