import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import PollVoters from './PollVoters';
import Plural from '../Plural';

const PollAnswerResult = ({ answer, totalVotes, hasVoted, isWinning, isAnonymous }) => {
  const [barWidth, setBarWidth] = useState(0);
  const router = useRouter();
  const percentage = Math.round((answer.votes / totalVotes) * 100);

  useEffect(() => {
    setBarWidth(percentage);
  }, []);

  useEffect(() => {
    setBarWidth(0);
    setTimeout(() => {
      setBarWidth(percentage);
    }, 100);
  }, [router.asPath]);

  const barStyle = {
    width: `${barWidth}%`,
    transition: 'width 1s ease',
  };

  return (
    <div className="flex  items-center justify-between my-2">
      <div className="flex flex-col w-10/12 gap-1">
        <div className="flex gap-2 items-center">
          <p className="text-sm font-semibold">{answer.answer}</p>
          {hasVoted && (
            <i
              className={`fa-solid fa-circle-check ${
                isWinning ? 'text-secondary' : 'text-primary'
              }`}
            ></i>
          )}
        </div>
        <div className="w-9/12">
          <div
            className={`h-3 rounded-full ${isWinning ? 'bg-secondary' : 'bg-primary'}`}
            style={barStyle}
          ></div>
        </div>
        {!isAnonymous && <PollVoters className="w-fit" voters={answer.voters} />}
      </div>
      <div className="flex items-center gap-2">
        <p className="text-sm">{isNaN(percentage) ? 0 : percentage}%</p>

        <p className="text-sm text-gray-500 whitespace-nowrap dark:text-slate-400">
          ({<Plural one="vot" many="voturi" count={answer.votes} />})
        </p>
      </div>
    </div>
  );
};

export default PollAnswerResult;
