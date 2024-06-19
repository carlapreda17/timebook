import Tooltip from '../Tooltip';
import PollStatusLabel from './PollStatusLabel';

const PollSingleAnswerNotApproved = ({ poll, role }) => {
  return (
    <article>
      <div className="flex items-start gap-1">
        <h2 className="font-bold text-lg mb-7 ">{poll.question}</h2>

        {poll.status === 'rejected' && <PollStatusLabel status={'Respins'} color={'accent'} />}
        {poll.status === 'pending' && (
          <PollStatusLabel
            status={role === 'admin' ? 'In asteptare' : 'Propus'}
            color={'secondary'}
          />
        )}
        {poll.isAnonymous && (
          <Tooltip icon="fa-solid fa-user-secret text-2xl text-primary dark:text-sky-500">
            Anonim
          </Tooltip>
        )}
      </div>

      <div className="flex flex-col gap-4">
        {poll.options.map((option, index) => (
          <p key={option._id} className="text-sm font-semibold">
            {index + 1}. {option.answer}
          </p>
        ))}
      </div>
    </article>
  );
};

export default PollSingleAnswerNotApproved;
