import CampBtn from "../../components/Shared/CampBtn";
import { Rating } from "@smastrom/react-rating";
import { MdEventSeat } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import useSecureAxios from "../../Hooks/useSecureAxios";
import { useEffect, useState } from "react";
import useRole from "../../Hooks/useRole";

const SingleCard = ({ item }) => {
  const { user } = useAuth();
  const { role } = useRole();

  const [isSelected, setIsSelected] = useState(false);

  // navigate
  const navigate = useNavigate();
  const location = useLocation();

  const {
    name,
    image,
    rating,
    enrolledStudents,
    price,
    seats,
    instructor,
    description,
    _id,
  } = item;

  // add to DB
  const secureAxios = useSecureAxios();

  useEffect(() => {
    const fetchSelectedClasses = async () => {
      const { data } = await secureAxios.get(
        `/selectedCarts?email=${user?.email}`
      );
      const isSelect =
        data &&
        Array.isArray(data) &&
        data.some((item) => item.classId === _id);
      setIsSelected(isSelect);
    };

    if (user) {
      fetchSelectedClasses();
    }
  }, [user?.email, _id, secureAxios]);

  // handle add class to select
  const handleAddToSelect = (item) => {
    if (!user) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You have to login first to select",
        confirmButtonText: "Login",
      }).then(() => {
        navigate("/login", { state: { from: location } });
      });
    }

    // add to selected cart
    const { _id, ...itemWithOutId } = item;
    const newCart = {
      classId: _id,
      ...itemWithOutId,
      email: user?.email,
    };
    axios
      .post(`${import.meta.env.VITE_API_LINK}/selectedCarts`, newCart)
      .then((res) => {
        if (res?.data?.insertedId) {
          toast.success("Class is selected", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setIsSelected(true);
        }
      });
  };

  // TODO: change rating color
  return (
    <div
      className={`card lg:card-side shadow-xl mb-8 lg:mb-16 w-full max-w-5xl mx-auto ${
        seats === 0 ? "bg-red-300" : "bg-base-200"
      }`}
    >
      <figure className="lg:w-1/3">
        <img
          className="h-[250px] lg:h-[350px] w-full object-cover object-center"
          src={image}
          alt={name}
        />
      </figure>
      <div className="card-body">
        <div className="flex justify-end">
          <Rating
            value={rating}
            style={{ maxWidth: 120, color: "red" }}
            readOnly
          />
        </div>
        <h2 className="card-title -mt-8">
          {name}
          <div className="badge badge-accent">Enrolled: {enrolledStudents}</div>
        </h2>
        <p> {instructor} </p>
        <p className="max-w-xl">{description}</p>
        <div className="space-y-2">
          <div className="flex gap-3 justify-center items-center">
            <MdEventSeat color="#17543E" className="h-6 w-6" />
            <p>
              Available Seats: <span className="font-bold">{seats}</span>
            </p>
          </div>
          <div className="flex gap-3 justify-center items-center">
            <FaDollarSign color="#17543E" className="h-6 w-6" />
            <p>
              Price: <span className="font-bold">${price}</span>
            </p>
          </div>
        </div>
        <div className="card-actions justify-end">
          <CampBtn
            handleOnClick={() => handleAddToSelect(item)}
            disabled={
              seats === 0 ||
              isSelected ||
              role === "admin" ||
              role === "instructor"
            }
          >
            Add To Select
          </CampBtn>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
