import React from "react";
import "../style/feedback.css";
import {FaStar} from 'react-icons/fa'
function FeedbackCard({ name, img, feedback }) {
  return (
    <div className="feedback-card">
      <img src={img} alt="" className="feedbackppl" />
      <h5 id="username">{name}</h5>
      <p>{feedback}</p>
        <div className="d-flex star">
            <FaStar className="starIcon"/><FaStar className="starIcon"/><FaStar className="starIcon"/><FaStar className="starIcon"/><FaStar className="starIcon"/>
        </div>
    </div>
  );
}

export default FeedbackCard;
