import React from "react";
import "./ToDoListSass/main.scss";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header_items">
            <div className="header_items_burger">
              <i className="ri-menu-line"></i>
              <h2>react user application</h2>
            </div>
            <div className="header_items_login">
              {/* <a href="#">Login</a> */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
