import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import putUser from "../../API/putUser";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();

  // for navigation
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  // handle google sign in
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(async (result) => {
        if (result?.user) {
          const loggedUser = result?.user;

          // save user in data base
          const newUser = {
            name: loggedUser?.displayName || "unknown",
            email: loggedUser?.email,
            image: loggedUser?.photoURL,
          };

          const data = await putUser(newUser);

          if (data?.upsertedCount || data?.matchedCount) {
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
