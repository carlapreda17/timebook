import Link from 'next/link';
import { useRef } from 'react';
import { useOnClickOutside } from '../../hooks';

const VacationSituationsRowContextMenu = ({ hide, id, setShowModal }) => {
  const ref = useRef();
  useOnClickOutside(ref, () => {
    hide();
  });
  return (
    <>
      <ul className="flex flex-col py-2 w-44 dark:bg-slate-900 rounded" ref={ref}>
        <li className="hover:bg-gray-100 dark:hover:bg-slate-800">
          <Link href={`/admin/vacation-requests/add/${id}`}>
            <a className="px-4 py-2 text-gray-600 flex items-center no-underline cursor-pointer text-xs dark:text-white">
              Adauga concediu
            </a>
          </Link>
        </li>
        <li className="hover:bg-gray-100 dark:hover:bg-slate-800">
          <button
            className="px-4 py-2 text-gray-600 flex items-center no-underline text-xs dark:text-white"
            onClick={() => setShowModal(true)}
          >
            Adauga zile de concediu
          </button>
        </li>
      </ul>
    </>
  );
};

export default VacationSituationsRowContextMenu;
