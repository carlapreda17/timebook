import { useState } from 'react';
import { classnames, toaster } from '../../lib';
import PollsCardFooter from './PollsCardFooter';
import PollsCardIcon from './PollsCardIcon';
import PollsCardQuestion from './PollsCardQuestion';
import PollsCardTitle from './PollsCardTitle';

const PollsCard = ({
  id,
  status,
  title,
  question,
  priority,
  active,
  createdAt,
  createdBy,
  refetch,
  role,
  hasParticipated,
  isAnonymous,
}) => {
  const [modal, setModal] = useState('');
  const [showContextMenu, setShowContextMenu] = useState(false);

  const hideModal = () => {
    setModal('');
    refetch();
  };

  const handleActions = async (actionFunction, messageSuccess, messageError) => {
    try {
      await actionFunction(id);
      toaster.success(messageSuccess);
      hideModal();
    } catch (err) {
      // eslint-disable-next-line
      console.log(err);
      toaster.error(messageError);
    }
  };

  return (
    <div className="h-full">
      <div
        className={classnames(
          'h-full border rounded shadow duration-500 relative flex flex-col justify-between p-4 gap-6 dark:bg-slate-800 dark:border-slate-600',
          active ? 'bg-white dark:bg-slate-800' : 'bg-gray-300 text-gray-700'
        )}
      >
        <div className="flex justify-between w-full  ">
          <PollsCardTitle {...{ title, id }} />
          <PollsCardIcon priority={priority} />
        </div>
        <PollsCardQuestion question={question} />
        <PollsCardFooter
          {...{
            modal,
            hideModal,
            setModal,
            showContextMenu,
            setShowContextMenu,
            handleActions,
            createdAt,
            createdBy,
            role,
            id,
            status,
            active,
            hasParticipated,
            isAnonymous,
          }}
        />
      </div>
    </div>
  );
};

export default PollsCard;
