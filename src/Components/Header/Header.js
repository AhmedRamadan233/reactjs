import React from "react";
import './Header.css';
import Button from "../../SharedUi/Button/Button";


const Header = () => {
  return (
    <header className="bg-dark text-light">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="bg-dark p-4 rounded">
              <h1>Ahmed Ramadan</h1>
              <p>
                ITI Open Source Mansoura
                React.js
              </p>
              <Button
                text="Contact me"
                linkTo="mailto:Ahmedromio233@gmail.com"
                className="btn btn-primary"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
