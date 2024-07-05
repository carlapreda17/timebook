import { Modal } from 'react-bootstrap';
import { Button } from '.';

const AreYouSureRomanian = ({ isOpen, hide, iAmSure, children }) => {
  return (
    <Modal centered show={isOpen} onHide={hide}>
      <Modal.Header closeButton>
        <Modal.Title>Confirmă acțiunea</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <div className="w-full flex justify-between">
          <Button className="cancel" onClick={hide}>
            <span>Anulează</span>
          </Button>
          <Button className="delete" onClick={iAmSure}>
            <i className="fa-solid fa-trash" />
            <span className="ml-2">Șterge</span>
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default AreYouSureRomanian;
