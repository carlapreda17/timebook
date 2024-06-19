import { React, useState } from 'react';
import Tooltip from '../Tooltip';
import truncate from '../../functions/truncate';
import AreYouSureRomanian from '../AreYouSureRomanian';
import { deleteActivity } from '../../api/activities';
import { toaster } from '../../lib';
import dateLocaleRo from '../../functions/dateLocaleRo';
import { Checkbox } from '../Fields';
import Link from 'next/link';
import EditActivityForm from '../Forms/EditActivityForm';
import { Modal } from 'react-bootstrap';
import FormatDuration from '../FormatDuration';

const IndividualRow = ({
  date,
  duration,
  project,
  description,
  _id,
  selectedRows,
  setSelectedRows,
  refetch,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(true);
  const hideModal = () => setIsOpen(false);
  const hideEditModal = () => setEditModalIsOpen(false);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const showEditModal = () => {
    setEditModalIsOpen(true);
  };
  const handleDelete = async (id) => {
    try {
      await deleteActivity(id);
      toaster.success('Activitatea a fost stearsa cu succes!');
      hideModal();
      refetch();
    } catch (err) {
      toaster.error('Activitatea nu a putut fi stearsa!');
    }
  };
  const handleSelect = (e) => {
    if (e.target.checked) {
      setSelectedRows((selectedRows) => [...selectedRows, _id]);
    } else {
      setSelectedRows(selectedRows.filter((id) => id !== _id));
    }
  };

  return (
    <>
      <tr className="even:bg-gray-100 cursor-pointer">
        <td className=" pl-8">
          <Checkbox onChange={handleSelect} checked={selectedRows.includes(_id) && 'checked'} />
        </td>
        <td className="p-4 w-24">
          <p className="w-24">{dateLocaleRo(date)}</p>
        </td>
        <td className="p-4 w-24">
          <span className="w-24">{<FormatDuration duration={duration} />}</span>
        </td>
        <td className="p-4 w-52 max-w-52">
          <Link href={`/admin/timesheets/projects/${project._id}`}>
            <a className="w-full line-clamp-1">{truncate(project.name, 25)}</a>
          </Link>
        </td>
        <td className="p-4 whitespace-pre-wrap">
          <p className="line-clamp-2">{description}</p>
        </td>
        <td className="p-4 w-24">
          <div className="flex w-28 justify-center">
            <button title="Editeaza" onClick={showEditModal}>
              <Tooltip icon="fas fa-edit text-blue-500 text-xl mr-1.5">Editeaza</Tooltip>
            </button>
            <button title="Șterge" onClick={handleClick}>
              <Tooltip icon="fa-solid fa-trash text-red-700 text-xl">Șterge</Tooltip>
            </button>
          </div>
        </td>
      </tr>
      <AreYouSureRomanian isOpen={isOpen} hide={hideModal} iAmSure={() => handleDelete(_id)}>
        Esti sigur ca doesti sa stergi aceasta activitate?
      </AreYouSureRomanian>
      <Modal centered show={editModalIsOpen} onHide={hideEditModal}>
        <EditActivityForm id={_id} hideModal={hideEditModal} />
      </Modal>
    </>
  );
};

export default IndividualRow;
