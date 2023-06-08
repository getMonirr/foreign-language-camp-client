

const PopularInstructorCard = ({ instructor }) => {
  const { image, name, takenClasses, studentsEnrolled, designation } =
    instructor;
  return (
    // <div className="card lg:card-side bg-base-100 shadow-xl p-6">
    //   <div className="flex justify-center items-center w-[200px]">
    //     <img className="rounded-full h-32 w-32 lg:h-48 lg:w-96 border-camp-bg shadow-xl border-8" src={image} alt={name} />
    //   </div>
    //   <div className="card-body">
    //     <h2 className="card-title">{name}</h2>
    //     <p>{designation}</p>
    //     <div className="card-actions justify-end">
    //       <button className="btn btn-primary">Listen</button>
    //     </div>
    //   </div>
    // </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center shadow-2xl p-6 rounded-lg gap-4">
      <div>
        <img
          className="rounded-full h-52 w-52 object-cover object-center border-8 shadow-xl"
          src={image}
          alt={name}
        />
      </div>
      <div>
        <h2 className="card-title">{name}</h2>
        <p>{designation}</p>
        <div className="mt-6">
          <h2 className="card-title text-base">
            Student Enrolled
            <div className="badge badge-secondary">{studentsEnrolled}</div>
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
