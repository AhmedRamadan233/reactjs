import React from "react";
import "./Portfolio.css"; 

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="portfolio-title">
        <h3>Portfolio</h3>
        <hr className="title-divider" />
      </div>
      <div className="portfolio-cards">
        <div className="portfolio-card">
          <img
            src="/assets/images/logo192.png"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text">Web Development</p>
          </div>
        </div>
        <div className="portfolio-card">
          <img
            src="/assets/images/logo192.png"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text">Web Development</p>
          </div>
        </div>
        <div className="portfolio-card">
          <img
            src="/assets/images/logo192.png"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text">Web Development</p>
          </div>
        </div>
        <div className="portfolio-card">
          <img
            src="/assets/images/logo192.png"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text">Web Development</p>
          </div>
        </div>
        <div className="portfolio-card">
          <img
            src="/assets/images/logo192.png"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text">Web Development</p>
          </div>
        </div>
        <div className="portfolio-card">
          <img
            src="/assets/images/logo192.png"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text">Web Development</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
