import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import CampBtn from "../../../components/Shared/CampBtn";

const ClassCard = ({ item }) => {
  const { name, image, rating, enrolledStudents, price, seats, instructor } =
    item;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          className="h-[350px] object-cover w-full object-center"
          src={image}
          alt={name}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title mb-6 text-2xl">
          {name}
          <div className="badge badge-secondary">
            Enrolled: {enrolledStudents}
          </div>
        </h2>
        <div className="space-y-3">
          <div className="flex items-end justify-start gap-4">
            <span className="font-bold text-lg">Rating: </span>
            <Rating value={rating} readOnly style={{ maxWidth: 150 }} />
            <span>({rating} of 5)</span>
          </div>
          <p className="text-lg">
            <span className="font-bold">Price:</span> ${price}
          </p>
          <p className="text-lg">
            <span className="font-bold">Instructor:</span> {instructor}
          </p>
        </div>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Seats: {seats} </div>
        </div>
        <div>
          <CampBtn>Show All Class</CampBtn>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
