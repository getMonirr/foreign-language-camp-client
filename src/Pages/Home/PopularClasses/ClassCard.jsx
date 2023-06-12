import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { motion } from "framer-motion";

const ClassCard = ({ item }) => {
  const { name, image, rating, price, seats, instructor, enrolledStudents } =
    item;
  const cardVariants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 50,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div variants={cardVariants}>
        <div className="card bg-base-100 shadow-xl group">
          <figure className="relative">
            <div className="h-1/2 group-hover:h-full z-50 w-full bg-gradient-to-t from-[#0000009c] to-transparent absolute bottom-0 left-0"></div>
            <img
              className="h-[243px] object-cover w-full object-center group-hover:scale-110 transition-all group-hover:rotate-3 ease-in-out duration-300"
              src={image}
              alt={name}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title mb-6 text-xl">{name}</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-start gap-4">
                <span className="text-md">Rating: </span>
                <Rating value={rating} readOnly style={{ maxWidth: 100 }} />
                <span className="text-sm text-camp-secondary">
                  ({rating} of 5)
                </span>
              </div>
              <p className="text-md">
                <span>Price:</span>{" "}
                <span className="font-bold text-camp-dis-col">${price}</span>
              </p>
              <p className="text-md">
                <spa>Instructor:</spa>{" "}
                <span className="font-bold text-camp-dis-col">
                  {instructor}
                </span>
              </p>
            </div>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Seats: {seats} </div>
              <div className="badge badge-outline">
                Enrolled: {enrolledStudents}{" "}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ClassCard;
