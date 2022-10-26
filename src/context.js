import React, { useState, useContext } from "react";
import sublinks from "./data";

const Appcontext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSidebaropen, setIsSidebaropen] = useState(false);
  const [isSubmenuopen, setIsSubmenuopen] = useState(false);
    const [location, setLocation] = useState({});
    const [page, setPage] = useState({page:'',links:[]});
  const openSidebar = () => {
    setIsSidebaropen(true);
  };
  const closeSidebar = () => {
    setIsSidebaropen(false);
  };
  const openSubmenu = (text,coordinates) => {
      const page = sublinks.find((link) => link.page === text)
      setPage(page)
      setLocation(coordinates)
    setIsSubmenuopen(true);
  };
  const closeSubmenu = () => {
    setIsSubmenuopen(false);
  };

  return (
    <Appcontext.Provider
      value={{
        isSubmenuopen,
        isSidebaropen,
        openSubmenu,
        openSidebar,
        closeSubmenu,
        closeSidebar,
        location,
        page,
      }}
    >
      {children}
    </Appcontext.Provider>
  );
};

export const useGlobalContext =()=>{
    return useContext(Appcontext)
}
