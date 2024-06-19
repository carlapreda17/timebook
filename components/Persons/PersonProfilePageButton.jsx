import React from 'react';

const PersonProfilePageButton = ({ show, showValue, classStyle, buttonText, iconSymbol }) => {
  return (
    <button
      type="button"
      className={`${classStyle} border-solid border-1 text-lg text-white lg:py-12 py-2 rounded text-center whitespace-nowrap`}
      onClick={() => show(showValue)}
    >
      <i className={`fa-solid fa-${iconSymbol}`} />
      <span className="ml-2">{buttonText} </span>
    </button>
  );
};

export default PersonProfilePageButton;
