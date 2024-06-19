import { Modal } from 'react-bootstrap';
import { Button } from '.';

const ReactivateProject = ({ isOpen, hide, iAmSure, children }) => {
  return (
    <Modal centered show={isOpen} onHide={hide}>
      <Modal.Header closeButton>
        <Modal.Title>Confirmă acțiunea</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <div className="w-full flex justify-between">
          <Button
            className="text-blue-700 border-blue-700 border-solid border-1 hover:text-white hover:bg-blue-700 transition ease-in-out duration-150 p-1.5 rounded px-3 text-center"
            onClick={hide}
          >
            <i className="fas fa-arrow-left"></i>
            <span className="ml-2">Inapoi </span>
          </Button>
          <Button
            className="text-green-700 border-green-700 border-solid border-1 hover:text-white hover:bg-green-700 transition ease-in-out duration-150 p-1.5 rounded px-3 text-center"
            onClick={iAmSure}
          >
            <i className="fa-solid fa-arrow-up" />
            <span className="ml-2">Reactiveaza</span>
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default ReactivateProject;
