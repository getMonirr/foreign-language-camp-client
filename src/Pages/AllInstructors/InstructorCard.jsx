import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const InstructorCard = ({ instructor }) => {
  const { image, name, takenClasses, email, classesName, designation } =
    instructor;
  return (
    <div className="card w-full shadow-lg py-4 group hover:shadow-inner">
      <figure>
        <img
          src={image}
          alt={name}
          className="rounded-full w-fit border-4 border-gray-500 group-hover:border-camp-secondary group-hover:rotate-6 object-cover object-center group-hover:scale-90 transition-all"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title -mb-1 group-hover:text-camp-secondary">
          {name}
        </h2>
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
      </div>
      <div className="rounded-bl-xl rounded-br-xl flex justify-evenly p-4 items-center">
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
    // <div>
    //   <div>
    //     <img src={image} alt={name} />
    //   </div>
    //   <div>

    //   </div>
    // </div>
  );
};

export default InstructorCard;
