const ActivityStatus = ({ active }) => {
  return (
    <>
      {active ? (
        <div className="text-sm font-normal text-white bg-secondary px-4 py-2 rounded-full">
          ACTIV
        </div>
      ) : (
        <div className="text-sm font-normal text-white bg-accent px-4 py-2 rounded-full">
          INACTIV
        </div>
      )}
    </>
  );
};

export default ActivityStatus;
