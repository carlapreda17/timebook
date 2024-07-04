import Link from 'next/link';

const LogbookButton = () => {
  return (
    <Link href="/admin/logbook">
      <a className="add-button">
        <i className="fa-regular fa-rectangle-list" />
        <span className="add-button-text">Logbook</span>
      </a>
    </Link>
  );
};

export default LogbookButton;
