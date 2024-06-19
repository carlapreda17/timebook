const EmailCard = ({ classes, email }) => {
  return (
    <li className={classes}>
      <span className="font-semibold">
        <i className="fa-solid fa-user mr-2 text-secondary text-xl"></i>Email{' '}
      </span>
      <span className="ml-7">{email}</span>
    </li>
  );
};

export default EmailCard;
