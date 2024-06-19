import { MessageNoRows } from '../LogbookTable';
import PollsCard from './PollsCard';

const PollsListSuccess = ({ data, refetch, role }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full content-start">
        {data.map((poll) => (
          <PollsCard key={poll._id} {...{ ...poll, id: poll._id, refetch, role }} />
        ))}
      </div>
      {!data?.length && <MessageNoRows />}
    </>
  );
};

export default PollsListSuccess;
