import { ActivityStatus } from '.';

const PersonalPageHeader = ({ data, status }) => {
  return (
    <h1 className="font-bold text-2xl px-8">
      {status === 'success' && (
        <>
          {status === 'success' && (
            <div className="flex flex-col">
              <div className="flex justify-between">
                <h2>{data.first_name + ' ' + data.last_name}</h2>
                <ActivityStatus active={data.active} />
              </div>
              <span className="text-sm text-gray-500">{data.job}</span>
            </div>
          )}
        </>
      )}
      {status === 'loading' && (
        <div className="h-7 w-48 bg-gray-200 rounded-md animate-pulse"></div>
      )}
      {status === 'error' && <div>Persoana nu exista!</div>}
    </h1>
  );
};

export default PersonalPageHeader;
