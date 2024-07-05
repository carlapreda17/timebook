import Tooltip from '../Tooltip';

const VacationStatus = ({ status }) => {
  return (
    <>
      {status === 'approved' && (
        <Tooltip icon={'fa-solid fa-check text-secondary text-2xl tablet:text-base w-full text-center'}>
          Aprobat
        </Tooltip>
      )}
      {status === 'rejected' && (
        <Tooltip icon={'fa-solid fa-x text-accent text-2xl tablet:text-base w-full text-center'}>Respins</Tooltip>
      )}
      {status === 'pending' && (
        <Tooltip
          icon={'fa-solid fa-hourglass text-primary text-xl tablet:text-base w-full dark:text-sky-500 text-center'}
        >
          In asteptare
        </Tooltip>
      )}
    </>
  );
};

export default VacationStatus;
