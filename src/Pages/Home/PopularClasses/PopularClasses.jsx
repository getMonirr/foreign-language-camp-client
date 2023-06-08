import React from "react";
import useClasses from "../../../Hooks/useClasses";

const PopularClasses = () => {
  const { classes } = useClasses();
  console.log(classes);
  return <div>PopularClasses</div>;
};

export default PopularClasses;
