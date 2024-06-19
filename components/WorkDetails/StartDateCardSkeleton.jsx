const StartDateCardSkeleton = ({ classes, status }) => {
  return (
    <li className={classes}>
      <span className="font-semibold">
        <i className="fa-solid fa-calendar-days mr-2 text-secondary text-lg" />
        Data de inceput:
      </span>{' '}
      {status === 'loading' && <div className="h-4 bg-gray-200 rounded-md w-full animate-pulse" />}
      {status === 'error' && <div className="h-4 bg-red-200 rounded-md w-full" />}
    </li>
  );
};

export default StartDateCardSkeleton;
