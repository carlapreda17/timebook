import React from 'react';
import AreYouSureRomanian from '../AreYouSureRomanian';
import { useState } from 'react';
import { deleteActivity } from '../../api/activities';
import { toaster } from '../../lib';
import { useDisclosure } from '../../hooks';
import ActivityActionMenu from './ActivityActionMenu';
import dateLocaleRo from '../../functions/dateLocaleRo';
import { Checkbox } from '../Fields';
import Link from 'next/link';
import { Modal } from 'react-bootstrap';
import EditActivityForm from '../Forms/EditActivityForm';
import FormatDuration from '../FormatDuration';

const ActivityRow = ({
  date,
  duration,
  description,
  _id,
  user,
  project,
  selectedRows,
  setSelectedRows,
  refetch,
  // edited,
}) => {
  console.log('The id is:', _id);
  const { isOpen, hide, toggle } = useDisclosure();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setModalIsOpen(true);
  const hideModal = () => setModalIsOpen(false);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const hideEditModal = () => setEditModalIsOpen(false);
  const handleSelect = (e) => {
    if (e.target.checked) {
      setSelectedRows((selectedRows) => [...selectedRows, _id]);
    } else {
      setSelectedRows(selectedRows.filter((id) => id !== _id));
    }
    console.log('selected rows: ', selectedRows);
  };
  const handleDelete = async (_id) => {
    try {
      await deleteActivity(_id);
      toaster.success('Activitatea a fost stearsa cu succes!');
      hideModal();
      refetch();
    } catch (err) {
      toaster.error('Activitatea nu a putut fi stearsa!');
    }
  };

  return (
    <>
      <tr
        className={
          selectedRows.includes(_id)
            ? 'cursor-pointer relative bg-sky-100'
            : 'even:bg-gray-100 cursor-pointer relative'
        }
      >
        <td className="p-4">
          <Checkbox onChange={handleSelect} checked={selectedRows.includes(_id) && 'checked'} />
        </td>
        <td className="p-4 px-8 w-24">
          <p className="w-24">{dateLocaleRo(date)}</p>
        </td>
        <td className="p-4 w-24">
          <span className="w-24">
            <FormatDuration duration={duration} />{' '}
          </span>
        </td>
        <td className="p-4 w-80 whitespace-pre-wrap">
          <Link href={`/admin/timesheets/projects/${project._id}`}>
            <a className=" w-full line-clamp-1">{project.name}</a>
          </Link>
        </td>
        <td className="p-4 w-28">
          <Link href={`/admin/timesheets/people/${user._id}`}>
            <a className="w-28">{user.first_name + ' ' + user.last_name}</a>
          </Link>
        </td>
        <td className="p-4 whitespace-pre-wrap">
          <p className="line-clamp-2">{description}</p>
        </td>
        {/*<td className="p-4">
        {edited.edited_by !== '' ? (
          <>
            <span>De {edited.edited_by}</span>
            <br />
            <span>la {edited.edited_at}</span>
          </>
        ) : (
          ''
        )}
      </td>
       */}
        <td className="p-4 w-28">
          <div className="flex justify-center w-28 gap-2 mr-4">
            {/* <button title="Editeaza">
              <Tooltip icon="fas fa-edit text-blue-500 text-lg">Editeaza</Tooltip>
            </button>
            <button title="Sterge" onClick={handleClick}>
              <Tooltip icon="fa-solid fa-trash text-red-700 text-lg">Sterge</Tooltip>
            </button>
            <button title="Aproba">
              <Tooltip icon="fa-solid fa-check-double text-green-500 text-lg">Aproba</Tooltip>
            </button> */}

            {isOpen && (
              <div
                className="absolute top-10 right-8 bg-white rounded-lg shadow-xl z-50 border"
                // ref={ref}
              >
                <ActivityActionMenu
                  id={_id}
                  hide={hide}
                  openModal={() => setModalIsOpen(true)}
                  openEditModal={() => setEditModalIsOpen(true)}
                />
              </div>
            )}
            {/* <button title="Informatii">
              <Tooltip icon="fa-solid fa-circle-info text-blue-500 text-lg">Informatii</Tooltip>
            </button> */}
          </div>
        </td>
      </tr>
      <AreYouSureRomanian isOpen={modalIsOpen} hide={hideModal} iAmSure={() => handleDelete(_id)}>
        Esti sigur ca doresti sa stergi aceasta activitate?
      </AreYouSureRomanian>
      <Modal centered show={editModalIsOpen} onHide={hideEditModal}>
        <EditActivityForm hideModal={hideEditModal} id={_id} />
      </Modal>
    </>
  );
};

export default ActivityRow;
