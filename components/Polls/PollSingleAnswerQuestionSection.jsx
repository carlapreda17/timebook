import Link from 'next/link';
import { useRef, useState } from 'react';
import { useOnClickOutside } from '../../hooks';
import PollStatusLabel from './PollStatusLabel';

const PollSingleAnswerQuestionSection = ({ poll, role }) => {
  const [showContextMenu, setShowContextMenu] = useState(false);
  const ref = useRef();

  useOnClickOutside(ref, () => {
    setShowContextMenu('');
  });

  return (
    <div className="flex justify-between align-middle">
      <div className="flex">
        <h2 className="font-bold text-lg mb-7 ">{poll.question}</h2>
        {poll.active ? (
          <PollStatusLabel status={'Activ'} color={'secondary'} />
        ) : (
          <PollStatusLabel status={'Inactiv'} color={'accent'} />
        )}
      </div>
      {role === 'admin' && (
        <div
          onClick={() => setShowContextMenu(true)}
          className="flex cursor-pointer px-4 relative h-2"
          role="button"
        >
          <i className="fa-solid fa-ellipsis-vertical text-xl" />
          {showContextMenu && (
            <div
              className="hover:bg-gray-100 py-1 absolute top-0 right-3 bg-white rounded-lg shadow-xl z-50 border h-fit"
              ref={ref}
            >
              <Link href={`${poll._id}/edit`}>
                <button
                  className="px-2 py-1 text-gray-600 flex items-center no-underline "
                  type="button"
                >
                  Editeaza
                </button>
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PollSingleAnswerQuestionSection;
