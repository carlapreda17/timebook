import { PollsCardLoading } from '.';

const PollsListLoading = () => {
  const mock = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; //mock data

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
      {mock.map((mock) => (
        <PollsCardLoading key={`poll-card-loading-${mock}`} />
      ))}
    </div>
  );
};

export default PollsListLoading;
