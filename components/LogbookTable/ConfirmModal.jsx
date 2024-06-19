import { Modal } from 'react-bootstrap';
import { Button } from '../';
import { classnames } from '../../lib';

const DEFAULTS = {
  title: 'Confirmă acțiunea',
  captionBack: 'Inapoi',
  captionConfirm: 'Confirma',
};

const ConfirmModal = ({
  isOpen,
  hide,
  iAmSure,
  captionBack,
  captionConfirm,
  title,
  green = false,
  children,
}) => {
  return (
    <Modal centered show={isOpen} onHide={hide}>
      <Modal.Header closeButton>
        <Modal.Title>{title || DEFAULTS['title']}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <div className="w-full flex justify-between">
          <Button
            className="border-blue-700 border-solid border-1 text-white bg-blue-700 transition ease-in-out duration-150 p-1.5 rounded px-3 text-center"
            onClick={hide}
          >
            <i className="fas fa-arrow-left"></i>
            <span className="ml-2">{captionBack || DEFAULTS['captionBack']}</span>
          </Button>
          <Button
            className={classnames(
              'border-solid border-1 text-white transition ease-in-out duration-150 p-1.5 rounded px-3 text-center',
              !green ? 'border-red-700 bg-red-700' : 'border-green-700 bg-green-700'
            )}
            onClick={iAmSure}
          >
            <i className="fa-regular fa-circle-check" />
            <span className="ml-2">{captionConfirm || DEFAULTS['captionConfirm']}</span>
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmModal;
