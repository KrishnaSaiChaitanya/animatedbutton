import React from "react";
import "./Button.css"; // Import the CSS file for styling

const Button = () => {
  return (
    <button className="cta">
      <div className="arrow">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/InteracLogo.svg/1024px-InteracLogo.svg.png"
          alt="Arrow"
          width="36"
          height="36"
        />
        <div></div>
      </div>
      <span className="label">Pay by e-Transfer®</span>
    </button>
  );
};

export default Button;
