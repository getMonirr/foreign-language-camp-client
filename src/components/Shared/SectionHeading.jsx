const SectionHeading = ({ children, title }) => {
  return (
    <div className="text-center pt-4 mb-16 max-w-2xl mx-auto">
      <h2 className="text-4xl font-camp-dis text-camp-dis-col font-bold">
        {title}
      </h2>
      <div className="h-[2px] w-14 my-6 bg-camp-secondary mx-auto"></div>
      <p>{children}</p>
    </div>
  );
};

export default SectionHeading;
