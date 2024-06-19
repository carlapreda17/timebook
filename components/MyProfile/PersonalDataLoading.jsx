import {
  EmailCardSkeleton,
  RoleCardSkeleton,
  BirthdayCardSkeleton,
  CreatedAtCardSkeleton,
} from './';

const PersonalDataLoading = () => {
  const liClasses =
    'w-1/2 card mb-4 text-gray-500 p-4 bg-white hover:bg-sky-100 hover:text-sky-900 border-b  border-gray-200 transition-all duration-300 ease-in-out  ';
  const ulClasses = 'rounded overflow-hidden m-8 mt-1';
  return (
    <>
      <h3 className="font-bold text-xl m-8 mb-4">Date personale</h3>
      <ul className={ulClasses}>
        <div className="flex gap-1">
          <EmailCardSkeleton classes={liClasses} status="loading" />
          <RoleCardSkeleton classes={liClasses} status="loading" />
        </div>
        <div className="flex gap-1">
          <BirthdayCardSkeleton classes={liClasses} status="loading" />
          <CreatedAtCardSkeleton classes={liClasses} status="loading" />
        </div>
      </ul>
    </>
  );
};

export default PersonalDataLoading;
