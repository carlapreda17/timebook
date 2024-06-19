import { Modal } from 'react-bootstrap';
import Button from '../Button';

const ActivityDurationModal = ({ show, hide }) => {
  return (
    <>
      <Modal size="" centered show={show} onHide={hide}>
        <Modal.Header closeButton>
          <Modal.Title className="dark:text-white">Introducerea duratei</Modal.Title>
        </Modal.Header>
        <Modal.Body className="dark:text-slate-300">
          <h3 className="font-semibold">
            Pentru a introduce durata activitatii, se pot folosi urmatoarele formate:
          </h3>
          <ul>
            <li>
              <code>120</code> - 120 de minute
            </li>
            <li>
              <code>120m</code> - 120 de minute
            </li>
            <li>
              <code>1h</code> - 60 de minute
            </li>
            <li>
              <code>2h20m</code> - 140 de minute
            </li>
            <li>
              <code>1.5</code> - 90 de minute
            </li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button className="confirm" onClick={hide}>
            Închide
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ActivityDurationModal;
