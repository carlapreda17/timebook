import Tooltip from '../Tooltip';
import AreYouSureRomanian from '../../components/AreYouSureRomanian';
import { useState } from 'react';

const FeedbackTableActions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const hideModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="flex items-center gap-4 relative justify-center">
        <div className="flex justify-center" onClick={() => setIsOpen(true)}>
          <Tooltip icon={'fas fa-trash text-accent text-2xl w-full text-center cursor-pointer'}>
            Șterge
          </Tooltip>
        </div>
      </div>
      <AreYouSureRomanian isOpen={isOpen} hide={hideModal} iAmSure={() => console.log('deleted')}>
        Esti sigur ca doresti sa stergi aceasta intrare?
      </AreYouSureRomanian>
    </>
  );
};

export default FeedbackTableActions;
