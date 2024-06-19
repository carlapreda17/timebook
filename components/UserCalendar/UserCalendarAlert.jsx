import { format, getISODay, subDays } from 'date-fns';

const UserCalendarAlert = ({ show, setShow, data }) => {
  const getAlert = () => {
    if (getISODay(new Date()) === 1) {
      return 'complete';
    }
    const today = format(new Date(), 'yyyy-MM-d');
    const yesterday = format(subDays(new Date(), 1), 'yyyy-MM-d');
    if (data[data.length - 1]?.date === today || data[data.length - 1]?.date === yesterday) {
      return 'complete';
    }
    return 'incomplete';
  };
  const alert = getAlert();
  // TODO: redo completely
  return null;
  return (
    <>
      {show && alert === 'incomplete' && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative w-fit mx-auto mb-2">
          <strong className="font-bold">Atentie!</strong>
          <span className="block sm:inline">
            Exista zile din trecut fara activitati. Completeaza timesheet-ul cat de curand!
          </span>
          <span className="top-0 bottom-0 right-0 px-4 py-3">
            <i className="fa-solid fa-x cursor-pointer" onClick={() => setShow(false)} />
          </span>
        </div>
      )}
      {show && alert === 'complete' && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative w-fit mx-auto mb-2">
          <span className="block sm:inline">Felicitari, timesheet-ul tau este la zi!</span>
          <span className="top-0 bottom-0 right-0 px-4 py-3">
            <i className="fa-solid fa-x cursor-pointer" onClick={() => setShow(false)} />
          </span>
        </div>
      )}
    </>
  );
};

export default UserCalendarAlert;
