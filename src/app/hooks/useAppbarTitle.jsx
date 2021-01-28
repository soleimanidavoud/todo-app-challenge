import { useEffect, useState } from "react";

function useAppbarTitle(pathname) {
  const [title, setTitle] = useState(null);

  useEffect(() => {
    setTitle(getTitleBasedOnRoute(pathname.split("/")[1]));
  }, [pathname]);

  const getTitleBasedOnRoute = (pathname) => {
    switch (pathname) {
      case "":
        return "Home";
      case "edit":
        return "Edit";
      default:
        return null;
    }
  };

  return { title };
}

export default useAppbarTitle;
