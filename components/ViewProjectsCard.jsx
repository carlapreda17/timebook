import Link from 'next/link';

const ViewProjectsCard = () => {
  return (
    <div className="flex justify-center">
      <div className="rounded-lg shadow-lg bg-white max-w-xs dark:bg-slate-800">
        <Link href={`/admin/projects`}>
          <a>
            <img className="w-52 mx-auto" src="/images/projects-card.png" alt="Proiecte" />
          </a>
        </Link>
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2 dark:text-white">Proiecte</h5>
          <p className="text-gray-700 text-sm mb-4 dark:text-slate-300">
            Vizualizeaza lista completa a proiectelor din cadrul companiei.
          </p>
          <Link href={`/admin/projects`}>
            <a
              type="button"
              className="flex px-4 py-2 bg-primary text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out no-underline"
            >
              <i className="fa-solid fa-eye fa-2x" />
              <div className="w-full -ml-6 flex justify-center items-center">Vizualizează</div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewProjectsCard;
