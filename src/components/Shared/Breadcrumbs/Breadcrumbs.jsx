import useReactRouterBreadcrumbs from "use-react-router-breadcrumbs";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import CampContainer from "../CampContainer";

const Breadcrumbs = () => {
  const breadcrumbs = useReactRouterBreadcrumbs();
  const location = useLocation();
  const [pageName, setPageName] = useState("");

  useEffect(() => {
    const pathParts = location.pathname.split("/");
    const currentPageName = pathParts[pathParts.length - 1];
    setPageName(currentPageName);
  }, [location]);
  return (
    <div className="bg-camp-secondary bg-opacity-90 p-4">
      <CampContainer>
        <div className=" flex justify-center items-start flex-col">
          <p className="text-white font-bold uppercase text-xl tracking-widest font-camp-dis">
            {pageName}
          </p>
          <div>
            <div className="text-md breadcrumbs text-white">
              <ul>
                {breadcrumbs.map(({ match, breadcrumb }, index) => (
                  <li key={index}>
                    <NavLink to={match?.pathname}>
                      <a>{breadcrumb}</a>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </CampContainer>
    </div>
  );
};

export default Breadcrumbs;
