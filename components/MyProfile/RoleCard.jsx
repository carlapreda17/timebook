import getRole from '../../functions/role';

const RoleCard = ({ classes, data }) => {
  return (
    <li className={classes}>
      <span className="font-semibold">
        <i className="fa-solid fa-briefcase mr-2 text-secondary text-xl"></i>Rol{' '}
      </span>
      <span className="ml-7">{getRole(data)}</span>
    </li>
  );
};

export default RoleCard;
