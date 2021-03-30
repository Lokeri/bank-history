import React from "react";

const Header: React.FC<HeaderProps> = ({ label }) => {
  return (
    <div id="header" className="w-full h-26 py-5 px-12 text-4xl border-b-2">
      {label}
    </div>
  );
};

interface HeaderProps {
  label: string;
}

export default Header;
