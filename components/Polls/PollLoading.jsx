import PageHeader from '../PageHeader';

const PollLoading = () => {
  return (
    <div>
      <PageHeader>
        <div className="bg-gray-200 rounded animate-pulse w-1/2 border-0 h-6"></div>
      </PageHeader>

      <div className="card flex flex-col gap-5 max-w-2xl my-6">
        <div className="bg-gray-200 rounded animate-pulse w-full border-0 h-6"></div>
        <div className="bg-gray-200 rounded animate-pulse w-1/2 border-0 h-6 mb-4"></div>
        <div className="bg-gray-200 rounded animate-pulse w-8/12 border-0 h-4"></div>
        <div className="bg-gray-200 rounded animate-pulse w-8/12 border-0 h-4"></div>
        <div className="bg-gray-200 rounded animate-pulse w-8/12 border-0 h-4"></div>
        <div className="bg-gray-200 rounded animate-pulse w-8/12 border-0 h-4"></div>
        <div className="bg-gray-200 rounded animate-pulse w-8/12 border-0 h-4"></div>
        <div className="flex justify-between ">
          <div className="bg-gray-200 rounded animate-pulse w-20 border-0 h-4"></div>
          <div className="bg-gray-200 rounded animate-pulse w-20 border-0 h-4"></div>
        </div>
      </div>
    </div>
  );
};
export default PollLoading;
