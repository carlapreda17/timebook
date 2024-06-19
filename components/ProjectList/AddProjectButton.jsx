import Link from '../Link';

const AddProjectButton = () => {
  return (
    <>
      <Link href="/admin/projects/add">
        <button className="border-white border-solid border-1 text-white hover:text-primary hover:bg-white transition ease-in-out duration-150 py-2 rounded px-4">
          <i className="fas fa-plus" />
          <span className="ml-2">Adauga proiect</span>
        </button>
      </Link>
    </>
  );
};

export default AddProjectButton;
