// Vendor
import React from "react";
import { Link } from "react-router-dom";

// CSS
import "./styles.css";

export interface HeaderProps {}

/**
 * @name Header
 * @description Header of the TODOLIST applications, defines links to days of the week
 */
const Header: React.FC<HeaderProps> = () => {
  return (
    <nav>
      <div className="header">
        <div className="link">
          <Link to="/">Home</Link>
        </div>
        <div className="link">
          <Link to="/monday">Monday</Link>
        </div>
        <div className="link">
          <Link to="/tuesday">Tuesday</Link>
        </div>
        <div className="link">
          <Link to="/wednesday">Wednesday</Link>
        </div>
        <div className="link">
          <Link to="/thursday">Thursday</Link>
        </div>
        <div className="link">
          <Link to="/friday">Friday</Link>
        </div>
      </div>
    </nav>
  );
};

export { Header };
