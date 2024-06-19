import Link from 'next/link';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { FeedbackForm, FeedbackButton } from '.';

const Feedback = ({ role, open }) => {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => setIsOpen(true);
  const hideModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      {role === 'user' && (
        <>
          <FeedbackButton onClick={showModal} open={open} />
          <Modal centered show={isOpen} onHide={hideModal}>
            <FeedbackForm hideModal={hideModal} show={isOpen} onHide={hideModal} />
          </Modal>
        </>
      )}
      {role === 'admin' && (
        <Link href={`/admin/feedback`}>
          <FeedbackButton open={open} />
        </Link>
      )}
    </>
  );
};

export default Feedback;
