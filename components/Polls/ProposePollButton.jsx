import Link from '../Link';

const AddPollButton = () => {
  return (
    <Link href="/user/polls/propose">
      <a className="border-white border-solid border-1 text-white hover:text-primary hover:bg-white transition ease-in-out duration-150 py-2 rounded px-4">
        <i className="fas fa-plus" />
        <span className="ml-2 hidden sm:inline">Propune sondaj</span>
      </a>
    </Link>
  );
};

export default AddPollButton;
