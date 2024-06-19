import React from 'react';
import { useState } from 'react';
import ExportModal from './Modals/ExportModal';
import { pickBy } from 'lodash';

const ExportButton = ({ filters, selectedPerson, selectedProject, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => setIsOpen(true);
  const hideModal = () => {
    setIsOpen(false);
  };

  const cleanedFilters = pickBy(filters, (v) => v !== undefined);

  return (
    <div {...props}>
      <button
        className="w-48 h-10 ml-6 bg-secondary border-white border-solid border-1 text-white hover:text-primary hover:bg-white transition ease-in-out duration-150 py-2 rounded px-4"
        onClick={showModal}
      >
        <i className="fas fa-arrow-down" />
        <span className="ml-2">Descarca activitati</span>
      </button>
      <ExportModal
        show={isOpen}
        hide={hideModal}
        filters={cleanedFilters}
        selectedPerson={selectedPerson}
        selectedProject={selectedProject}
      />
    </div>
  );
};

export default ExportButton;
