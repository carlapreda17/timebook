import { useRef } from 'react';
import { useOnClickOutside } from '../../hooks';
import Link from '../Link';

const ProjectContextMenu = ({ id, hide, setModal }) => {
  const ref = useRef();

  useOnClickOutside(ref, () => {
    hide();
  });

  const openDeleteModal = () => {
    setModal('delete');
  };

  return (
    <>
      <ul className="flex flex-col py-2 w-40 dark:bg-slate-800" ref={ref}>
        <li className="hover:bg-gray-100 dark:hover:bg-slate-700">
          <Link href={`/admin/timesheets/projects/${id}`}>
            <a className="px-4 py-2 text-gray-600 flex items-center no-underline dark:text-slate-200">
              Vezi timesheet
            </a>
          </Link>
        </li>
        <li className="hover:bg-gray-100 dark:hover:bg-slate-700">
          <Link href={`/admin/projects/${id}`}>
            <a className="px-4 py-2 text-gray-600 flex items-center no-underline dark:text-slate-200">
              Vezi detalii
            </a>
          </Link>
        </li>
        <li className="hover:bg-gray-100 dark:hover:bg-slate-700">
          <Link href={`/admin/projects/${id}/edit`}>
            <a className="px-4 py-2 text-gray-600 flex items-center no-underline dark:text-slate-200">
              Editeaza proiect
            </a>
          </Link>
        </li>
        <li className="hover:bg-gray-100 dark:hover:bg-slate-700">
          <a
            role="button"
            className="px-4 py-2 text-gray-600 flex items-center dark:text-slate-200"
            onClick={openDeleteModal}
            type="button"
          >
            Șterge proiect
          </a>
        </li>
      </ul>
    </>
  );
};

export default ProjectContextMenu;
