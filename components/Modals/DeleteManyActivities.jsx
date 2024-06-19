import React from 'react';
import { Modal } from 'react-bootstrap';
import Plural from '../Plural';
import { Button } from '../';
import { toaster } from '../../lib';
import { deleteMany } from '../../api/activities';

const DeleteManyActivities = ({ show, hide, activities, onComplete }) => {
  const handleClick = async () => {
    try {
      const { numDeleted, numRequested } = await deleteMany({ _ids: activities });
      hide();
      toaster.success(`${numDeleted} din ${numRequested} activitati au fost sterse`);
      onComplete();
    } catch ({ message }) {
      toaster.error(message);
      hide();
    }
  };

  return (
    <Modal className="" size="" centered show={show} onHide={hide}>
      <Modal.Header closeButton>
        <Modal.Title>Confirmă acțiunea</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="text-lg font-base">
          Urmeaza sa stergi{' '}
          <span className="font-bold">
            <Plural one="activitate" many="activitati" count={activities.length} />
          </span>
          . Apasa continua pentru a confirma operatiunea.
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="w-full flex justify-between">
          <Button
            className="text-accent border-accent border-solid border-1 hover:text-white hover:bg-accent transition ease-in-out duration-150 p-1.5 rounded px-3 text-center"
            onClick={hide}
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

export default DeleteManyActivities;
