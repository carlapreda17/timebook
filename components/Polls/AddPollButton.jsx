import Link from '../Link';

const AddPollButton = () => {
  return (
    <Link href="/admin/polls/add">
      <a className="add-button">
        <i className="fas fa-plus" />
        <span className="add-button-text">Adaugă sondaj</span>
      </a>
    </Link>
  );
};

export default AddPollButton;
