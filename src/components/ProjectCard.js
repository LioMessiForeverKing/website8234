import { Col } from "react-bootstrap";
import 'animate.css';
import { useState } from 'react';

export const ProjectCard = ({ title, description, imgUrl, points }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Col size={12} sm={6} md={4}>
      <div
        className="proj-imgbx animate__animated animate__fadeIn"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="proj-icon-txt">
          <img src={imgUrl} alt="Project Icon" className={`proj-icon ${isHovered ? 'zoom' : ''}`} />
          <div className="proj-txt">
            <h4 className={isHovered ? 'hovered-title' : ''}>{title}</h4>
            <span>{description}</span>
            <ul>
              {points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Col>
  );
};
