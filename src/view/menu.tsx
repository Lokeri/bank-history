import React, { useState } from "react";
import MenuItem from "./component/menu-item";
import logo from "../assets/react-icon.svg";
import { useHistory } from "react-router-dom";

const Menu: React.FC = () => {
  const history = useHistory();
  const [route, setCurrentRoute] = useState(history.location.pathname);

  return (
    <div className="w-60 flex-column bg-gray-100">
      <div className="m-4 flex">
        <img className="h-6 mr-1 mt-2" src={logo} alt="logo" />
        <span className="text-2xl">Bank history</span>
      </div>
      {pages.map((el) => (
        <MenuItem
          id={`menu-${el.path}`}
          key={el.path}
          to={el.path}
          label={el.label}
          onClick={() => setCurrentRoute(el.path)}
          active={route.includes(el.path)}
        />
      ))}
    </div>
  );
};

const pages: Page[] = [
  { path: "transactions", label: "History" },
  { path: "cards", label: "Cards" },
];

interface Page {
  path: string;
  label: string;
}

export default Menu;
