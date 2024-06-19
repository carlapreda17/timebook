import { useState } from 'react';
import { solveFeedback } from '../../api/feedback';
import { toaster } from '../../lib';
import { ConfirmModal } from '../LogbookTable';
import Tooltip from '../Tooltip';

const FeedbackStatus = ({ status, id, refetch }) => {
  const [modal, setModal] = useState('');
  const hideModal = () => {
    setModal('');
  };
  const handleSolve = async (id) => {
    try {
      await solveFeedback(id);
      toaster.success('Feedbackul a fost marcat ca rezolvat!');
      hideModal();
      refetch();
    } catch (e) {
      toaster.error('Feedbackul nu a putut fi marcat ca rezolvat!');
      // eslint-disable-next-line no-console
      console.log(e);
    }
  };

  return (
    <>
      {status ? (
        <Tooltip icon={'fa-solid fa-check text-secondary text-2xl w-full text-center'}>
          Rezolvat
        </Tooltip>
      ) : (
        <div className="cursor-pointer" onClick={() => setModal('solve')}>
          <Tooltip icon="fa-solid fa-thumbs-up text-2xl w-full text-center text-primary">
            Marcheaza ca rezolvat
          </Tooltip>
        </div>
      )}
      <ConfirmModal
        isOpen={modal === 'solve'}
        hide={hideModal}
        iAmSure={() => handleSolve(id)}
        green={true}
      >
        Esti sigur ca acest feedback a fost rezolvat?
      </ConfirmModal>
    </>
  );
};

export default FeedbackStatus;
