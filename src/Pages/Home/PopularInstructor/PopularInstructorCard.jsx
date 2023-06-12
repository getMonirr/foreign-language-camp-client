
const PopularInstructorCard = ({ instructor }) => {
  const { image, name, takenClasses, studentsEnrolled, designation } =
    instructor;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center shadow-2xl hover:shadow-inner  p-6 rounded-lg gap-4 group">
      <div>
        <img
          className="rounded-full h-52 w-52 object-cover object-center border-8 shadow-xl group-hover:scale-90 transition-all mx-auto"
          src={image}
          alt={name}
        />
      </div>
      <div>
        <h2 className="card-title group-hover:text-camp-secondary">{name}</h2>
        <p>{designation}</p>
        <div className="mt-6">
          <h2 className="card-title text-base">
            Student Enrolled
            <div className="badge badge-secondary bg-camp-secondary">{studentsEnrolled}</div>
          </h2>
          <div className="badge badge-outline">
            Taken Classes: {takenClasses}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularInstructorCard;
