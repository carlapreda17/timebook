import React from 'react';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Plural from '../Plural';
import { Button } from '../';
import { toaster } from '../../lib';
import { moveToProject } from '../../api/activities';
import SelectProjectNoFormik from '../Fields/SelectProjectNoFormik';

const MoveToProject = ({ show, hide, activities, onComplete }) => {
  const [project, setProject] = useState();
  const handleClick = async () => {
    if (!project) {
      return toaster.error('Trebuie sa selectezi un proiect!');
    }
    try {
      const response = await moveToProject({ _ids: activities, newProject: project });
      if (response.found && !response.updated) {
        return toaster.error('Nicio activitate nu a fost mutata!');
      }
      hide();
      toaster.success(`${response.updated} din ${response.found} activitati au fost mutate!`);
      onComplete();
    } catch (err) {
      toaster.error('Activitatiile nu au putut fi mutate');
    }
  };

  const handlehide = () => {
    setProject();
    hide();
  };

  const handleChange = (e) => {
    setProject(e.target.value);
  };

  return (
    <Modal className="" size="" centered show={show} onHide={hide}>
      <Modal.Header closeButton>
        <Modal.Title>Confirmă acțiunea</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="text-lg font-base">
          Urmeaza sa muti{' '}
          <span className="font-bold">
            <Plural one="activitate" many="activitati" count={activities.length} />
          </span>
          . Apasa continua pentru a confirma operatiunea.
        </div>
        <div className="mt-3">
          <SelectProjectNoFormik onChange={handleChange} />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="w-full flex justify-between">
          <Button
            className="text-accent border-accent border-solid border-1 hover:text-white hover:bg-accent transition ease-in-out duration-150 p-1.5 rounded px-3 text-center"
            onClick={handlehide}
          >
            <span className="">Anulează</span>
          </Button>
          <Button
            className="text-primary border-primary border-solid border-1 hover:text-white hover:bg-primary transition ease-in-out duration-150 p-1.5 rounded px-3 text-center"
            onClick={handleClick}
          >
            <span className="">Confirma</span>
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default MoveToProject;
