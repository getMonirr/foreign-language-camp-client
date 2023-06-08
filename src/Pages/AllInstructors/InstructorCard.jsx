import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import CampBtn from "../../components/Shared/CampBtn";

const InstructorCard = ({ instructor }) => {
  const {
    image,
    name,
    takenClasses,
    email,
    classesName,
    designation,
  } = instructor;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt={name}
          className="rounded-xl w-full h-[300px] object-cover object-center"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title -mb-1">{name}</h2>
        <p>{designation}</p>
        <div className="text-start mt-6">
          <p>
            <span className="font-bold">Email:</span> {email}
          </p>
          <p>
            <span className="font-bold">Taken Classes:</span>{" "}
            <span>{takenClasses}</span>
          </p>
          <p>
            <span className="font-bold">Classes:</span>
            <ul className="list-disc list-inside ml-3">
              {Array.isArray(classesName) &&
                classesName.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </p>
        </div>
        <div className="mr-auto mt-3">
            <CampBtn>See all Classes</CampBtn>
        </div>
      </div>
      <div className="bg-camp-primary rounded-bl-xl rounded-br-xl text-white flex justify-evenly p-4 items-center">
        <Link to="">
          <FaFacebook className="hover:text-camp-secondary h-6 w-6" />
        </Link>
        <Link to="">
          <FaLinkedin className="hover:text-camp-secondary h-6 w-6" />
        </Link>
        <Link to="">
          <FaTwitter className="hover:text-camp-secondary h-6 w-6" />
        </Link>
      </div>
    </div>
  );
};

export default InstructorCard;
