import Link from 'next/link';

const CalendarViewButton = () => {
  return (
    <Link href="/user/calendar">
      <a className="border-white border-solid border-1 text-white hover:text-primary hover:bg-white transition ease-in-out duration-150 py-2 rounded px-4 cursor-pointer">
        <i className="fas fa-calendar" />
        <span className="ml-2 hidden md:inline">Calendar</span>
      </a>
    </Link>
  );
};

export default CalendarViewButton;
