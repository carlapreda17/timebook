import Link from 'next/link';

const UserTimesheetButton = () => {
  return (
    <Link href="/user/timesheet">
      <a className="border-white border-solid border-1 text-white hover:text-primary hover:bg-white transition ease-in-out duration-150 py-2 rounded px-4 cursor-pointer">
        <i className="fa-regular fa-rectangle-list" />
        <span className="ml-2 hidden md:inline">Timesheet</span>
      </a>
    </Link>
  );
};

export default UserTimesheetButton;
