import { PollFormSingleAnswer } from '../Forms';
import PageHeader from '../PageHeader';
import PollSingleAnswerNotApproved from './PollSingleAnswerNotApproved';

const PollSuccess = ({ data, refetch, role }) => {
  return (
    <div>
      <PageHeader>
        <div className="flex items-center py-4 ">
          <h1 className="font-bold text-2xl">{data.title}</h1>
        </div>
        {data.description}
      </PageHeader>
      <div className="card max-w-2xl my-6 dark:text-white">
        {data.status === 'approved' ? (
          <PollFormSingleAnswer {...{ poll: data, refetch, role }} />
        ) : (
          <PollSingleAnswerNotApproved poll={data} role={role} />
        )}
      </div>
    </div>
  );
};

export default PollSuccess;
