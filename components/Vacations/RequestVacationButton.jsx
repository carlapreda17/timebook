import Link from 'next/link';

const RequestVacationButton = () => {
  return (
    <Link href="/user/vacation-requests/request">
      <button
        className="add-button"
        type="button"
      >
        <i className="fas fa-plus" />
        <span className="add-button-text">Solicită concediu</span>
      </button>
    </Link>
  );
};

export default RequestVacationButton;
