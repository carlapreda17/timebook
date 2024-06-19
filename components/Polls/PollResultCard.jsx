import { userHasVotedOption } from '../../functions/userHasVotedOption';
import PollAnswerResult from './PollAnswerResult';

const PollResultCard = ({ poll }) => {
  const maxVotes = Math.max(...poll.options.map((option) => option.votes));

  return (
    <main>
      {poll.options.map((option) => (
        <PollAnswerResult
          key={option._id}
          answer={option}
          totalVotes={poll.totalVotes}
          hasVoted={userHasVotedOption(option)}
          isWinning={option.votes === maxVotes}
          isAnonymous={poll.isAnonymous}
        />
      ))}
    </main>
  );
};

export default PollResultCard;
