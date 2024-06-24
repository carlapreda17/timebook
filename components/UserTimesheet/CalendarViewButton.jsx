import Link from 'next/link';

const CalendarViewButton = () => {
  return (
    <Link href="/user/calendar">
      <a className="add-button">
        <i className="fas fa-calendar" />
        <span className="add-button-text">Calendar</span>
      </a>
    </Link>
  );
};

export default CalendarViewButton;
