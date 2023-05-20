import React from "react";
import "./Skills.css";
import { ProgressBar } from "react-bootstrap";

const Skill = () => {
  return (
    <div className="my-skills row mb-3">
      <div className="my-focus col-12 col-md-5">
        <h3>My focus</h3>
        <hr className="w-50" />
        <ul className="list-unstyled">
          <li>
            <h5>Laravel</h5>
          </li>
          <li>
            <h5>Nodejs/Expressjs</h5>
          </li>
          <li>
            <h5>MySQL</h5>
          </li>
          <li>
            <h5>Mongodb</h5>
          </li>
          <li>
            <h5>HTML</h5>
          </li>
          <li>
            <h5>CSS</h5>
          </li>
          <li>
            <h5>Git/Github</h5>
          </li>
        </ul>
      </div>
      <div className="my-progress col-12 col-md-7">
        <div className="skill-progress">
          <h5>Laravel</h5>
          <ProgressBar variant="success" now={95} />
        </div>
        <div className="skill-progress">
          <h5>Nodejs/Expressjs</h5>
          <ProgressBar variant="success" now={80} />
        </div>
        <div className="skill-progress">
          <h5>MySQL</h5>
          <ProgressBar variant="success" now={90} />
        </div>
        <div className="skill-progress">
          <h5>Mongodb</h5>
          <ProgressBar variant="success" now={75} />
        </div>
        <div className="skill-progress">
          <h5>HTML</h5>
          <ProgressBar variant="success" now={90} />
        </div>
        <div className="skill-progress">
          <h5>CSS</h5>
          <ProgressBar variant="success" now={90} />
        </div>
        <div className="skill-progress">
          <h5>Git/Github</h5>
          <ProgressBar variant="success" now={95} />
        </div>
      </div>
    </div>
  );
};

export default Skill;
