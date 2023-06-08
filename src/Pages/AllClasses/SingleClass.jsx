import React from "react";
import CampBtn from "../../components/Shared/CampBtn";
import { Rating } from "@smastrom/react-rating";
import { MdEventSeat } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";

const SingleCard = ({ item }) => {
  const {
    name,
    image,
    rating,
    enrolledStudents,
    price,
    seats,
    instructor,
    description,
  } = item;
  // TODO: change rating color
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl mb-8 lg:mb-16 w-full max-w-5xl mx-auto">
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
          <CampBtn>Add To Select</CampBtn>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
