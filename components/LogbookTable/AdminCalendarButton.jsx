import Link from 'next/link';

const AdminCalendarButton = () => {
  return (
    <Link href="/admin/calendar">
      <a className="add-button">
        <i className="fas fa-calendar" />
        <span className="add-button-text">Calendar</span>
      </a>
    </Link>
  );
};

export default AdminCalendarButton;
