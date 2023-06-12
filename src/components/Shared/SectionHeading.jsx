import { useDark } from "../../Hooks/useDark";

const SectionHeading = ({ children, title }) => {
  const { dark } = useDark();
  return (
    <div className="text-center pt-4 mb-16 max-w-2xl mx-auto px-4">
      <h2
        className={`text-4xl font-camp-dis  font-bold ${
          dark ? "text-white" : "text-camp-dis-col"
        }`}
      >
        {title}
      </h2>
      <div className="h-[2px] w-14 my-6 bg-camp-secondary mx-auto"></div>
      <p>{children}</p>
    </div>
  );
};

export default SectionHeading;
