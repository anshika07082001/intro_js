import { NewSidebar } from "@cedcommerce/ounce-ui";
import React from "react";
import { Home } from "react-feather";

const Sidebar = () => {
  let menu = [
    { id: "Dashboard", content: "Dashboard", icon: <Home /> },
    { id: "Profile", content: "Profile", icon: <Home /> },
    { id: "Products", content: "Products", icon: <Home /> },
    { id: "Orders", content: "Orders", icon: <Home /> },
    { id: "Configuration", content: "Configuration", icon: <Home /> },
    { id: "Activities", content: "Activities", icon: <Home /> },
  ];
  return <NewSidebar menu={menu} />;
};

export default Sidebar;
