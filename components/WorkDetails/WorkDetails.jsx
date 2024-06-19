import { StartDateCard, TotalWorkTimeCard } from '.';

const WorkDetails = ({ data }) => {
  const liClasses =
    'w-1/2 card mb-1.5 text-gray-500 p-4 bg-white hover:bg-sky-100 hover:text-sky-900 border-b  border-gray-200 transition-all duration-300 ease-in-out  ';
  const ulClasses = 'rounded overflow-hidden m-8 mt-1';

  return (
    <div>
      <h3 className="font-bold text-xl m-8 mb-1">Raport de munca</h3>
      <ul className={ulClasses}>
        <div className="flex gap-1">
          <StartDateCard classes={liClasses} data={data} />
          <TotalWorkTimeCard classes={liClasses} data={data} />
        </div>
      </ul>
    </div>
  );
};

export default WorkDetails;
