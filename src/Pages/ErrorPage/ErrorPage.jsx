import { Player } from "@lottiefiles/react-lottie-player";
import { Link, useRouteError } from "react-router-dom";
import CampBtn from "../../components/Shared/CampBtn";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="hero min-h-screen bg-camp-bg-2 text-white">
      <div className="hero-content text-center">
        <Player
          autoplay
          loop
          src="https://assets3.lottiefiles.com/packages/lf20_9Fhz02H45R.json"
        />
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">
            {error?.statusText || "Not Found"}
          </h1>
          <p className="py-6">{error?.data || "something is wrong"}</p>
          <Link to="/">
            <CampBtn>
              {" "}
              <FaArrowAltCircleLeft /> Back to Home
            </CampBtn>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
