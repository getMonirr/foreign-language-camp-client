import PuffLoader from "react-spinners/PuffLoader";

const Loading = () => {
    return (
        <div className="flex justify-center items-center min-h-[500px]">
           <PuffLoader color="#36d7b7" /> 
        </div>
    );
};

export default Loading;