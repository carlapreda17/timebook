const RoleCardSkeleton = ({ classes, status }) => {
  return (
    <li className={classes}>
      <span className="font-semibold">
        <i className="fa-solid fa-briefcase mr-2 text-secondary text-lg"></i>Rol:
      </span>{' '}
      {status === 'loading' && <div className="h-4 bg-gray-200 rounded-md w-full animate-pulse" />}
      {status === 'error' && <div className="h-4 bg-red-200 rounded-md w-full" />}
    </li>
  );
};

export default RoleCardSkeleton;
