import React from "react";
import { Link } from "react-router-dom";

const Menu: React.FC<MenuItemProps> = ({ to, label, active, id, onClick }) => {
  return (
    <Link to={`/${to}`}>
      <div
        id={id}
        className={`h-10 m-2 px-4 py-2 rounded-lg ${
          active ? "bg-menu-purple text-activePurple" : "text-black"
        }`}
        onClick={onClick}
      >
        {label}
      </div>
    </Link>
  );
};

interface MenuItemProps {
  id: string;
  to: string;
  label: string;
  active: boolean;
  onClick?: any;
}

export default Menu;
