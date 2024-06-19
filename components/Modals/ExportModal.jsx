import React from 'react';
import { toaster } from '../../lib';

import { exportActivities } from '../../api/activities';
import { ConfirmModal } from '../LogbookTable';

const ExportModal = ({ show, hide, filters, selectedPerson, selectedProject }) => {
  const handleClick = async () => {
    let data = {
      ...(filters.projectId && { projectId: filters.projectId }),
      ...(filters.userId && { userId: filters.userId }),
      ...(filters.from && { from: filters.from }),
      ...(filters.to && { to: filters.to }),
    };
    try {
      await exportActivities(data);
      hide();
      toaster.success('Fisierul excel se descarca.');
    } catch (err) {
      // eslint-disable-next-line
      console.log(err);
      toaster.error('Eroare la descarcare!');
    }
  };

  return (
    <ConfirmModal isOpen={show} hide={hide} iAmSure={handleClick}>
      {Object.keys(filters).length > 1 ? (
        <div className="text-lg font-base">
          Urmeaza sa descarci raportul de activitati cu urmatoarele filtre:
        </div>
      ) : (
        <div className="text-lg font-base">Urmeaza sa descarci raportul de activitati</div>
      )}
      {selectedPerson._id && (
        <h3>{'Nume persoana: ' + selectedPerson.first_name + ' ' + selectedPerson.last_name}</h3>
      )}
      {selectedProject._id && <h3>{'Nume proiect: ' + selectedProject.name}</h3>}

      {filters.from && <h3>{'Data inceput: ' + filters.from}</h3>}
      {filters.to && <h3>{'Data sfarsit: ' + filters.to}</h3>}
    </ConfirmModal>
  );
};

export default ExportModal;
