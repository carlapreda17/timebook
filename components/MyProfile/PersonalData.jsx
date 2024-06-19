import { EmailCard, RoleCard, BirthdayCard, CreatedAtCard } from '.';

const PersonalData = ({ data }) => {
  const liClasses =
    'w-1/2 card mb-0.5 text-gray-500 p-4 bg-white hover:bg-sky-100 hover:text-sky-900 border-b  border-gray-200 transition-all duration-300 ease-in-out';
  const ulClasses = 'rounded overflow-hidden mx-8 mt-1';
  return (
    <>
      <h3 className="font-bold text-xl m-8 mb-1">Date personale</h3>
      <ul className={ulClasses}>
        <div className="flex gap-1">
          <EmailCard classes={liClasses} email={data.email} />
          <RoleCard classes={liClasses} data={data} />
        </div>
      </ul>
      <ul className={ulClasses}>
        <div className="flex gap-1">
          <BirthdayCard classes={liClasses} birthday={data.birthday} />
          <CreatedAtCard classes={liClasses} createdAt={data.createdAt} />
        </div>
      </ul>
    </>
  );
};

export default PersonalData;
