import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth";

const SocialLogin = () => {
  const { user, googleSignIn } = useAuth();

  return (
    <button className="btn flex justify-center items-center w-full hover:bg-camp-primary rounded-none hover:rounded-lg hover:text-white">
      <FcGoogle className="h-8 w-8 mr-5" />
      Continue with google
    </button>
  );
};

export default SocialLogin;
