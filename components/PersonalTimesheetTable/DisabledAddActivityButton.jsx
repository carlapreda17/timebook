import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const DisabledAddActivityButton = () => {
  return (
    <OverlayTrigger
      placement="top"
      overlay={<Tooltip className="tooltip">Persoana este inactiva</Tooltip>}
    >
      <span>
        <button
          className="border-white border-solid border-1 text-white hover:text-primary hover:bg-white transition ease-in-out duration-150 py-2 rounded px-4 pointer-events-none"
          disabled
        >
          <i className="fas fa-plus" />
          <span className="ml-2">Adauga activitate</span>
        </button>
      </span>
    </OverlayTrigger>
  );
};

export default DisabledAddActivityButton;
