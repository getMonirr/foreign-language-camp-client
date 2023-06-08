const SectionHeading = ({ children }) => {
  return (
    <div className="text-center mt-32 mb-16">
      <h2 className="text-5xl font-camp-dis font-bold">{children}</h2>
      <div className="h-2 w-64 mt-3 bg-camp-secondary mx-auto"></div>
      <div className="h-1 w-48 mt-2 bg-camp-secondary mx-auto"></div>
    </div>
  );
};

export default SectionHeading;
