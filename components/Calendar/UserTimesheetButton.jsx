import Link from 'next/link';

const UserTimesheetButton = () => {
  return (
    <Link href="/user/timesheet">
      <a className="add-button">
        <i className="fa-regular fa-rectangle-list" />
        <span className="add-button-text">Timesheet</span>
      </a>
    </Link>
  );
};

export default UserTimesheetButton;
