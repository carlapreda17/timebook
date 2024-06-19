import Link from 'next/link';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';

import dateLocaleRo from '../functions/dateLocaleRo';

import { Checkbox } from './Fields';

import FormatDuration from './FormatDuration';
import AddActivityToProjectForm from './Forms/AddActivityToProjectForm';

const ProjectTimesheetSuccess = ({ data, project, refetch }) => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const hideModal = () => {
    setIsOpen(false);
  };

  const showModal = () => {
    setIsOpen(true);
  };

  const handleSelect = (e) => {
    if (e.target.checked) {
      setSelectedRows((selectedRows) => [...selectedRows, e.target.id]);
    } else {
      setSelectedRows(selectedRows.filter((id) => id !== e.target.id));
    }
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      for (let i = 0; i < data.pages.length; i++) {
        if (!selectedRows.includes(data.pages[i]._id)) {
          setSelectedRows((selectedRows) => [...selectedRows, data.pages[i]._id]);
        }
      }
    } else {
      setSelectedRows([]);
    }
  };

  return (
    <div>
      <Modal centered show={isOpen} onHide={hideModal}>
        <AddActivityToProjectForm
          hide={hideModal}
          projectId={project._id}
          refetch={refetch}
        ></AddActivityToProjectForm>
      </Modal>
      <div className="card">
        <div className="flex justify-between md:px-5 pt-5">
          <div className="flex">
            <h2 className=" text-2xl font-semibold">{project.name}</h2>
          </div>
          <button className="py-2.5 px-5 text-white h-min bg-primary rounded" onClick={showModal}>
            Adauga activitate
          </button>
        </div>

        <div className="px-2 md:px-5 pt-5">
          {data.pageParams.count > 0 && (
            <table className="min-w-full">
              <tr className="border-b bg-primary">
                <th className="p-3">
                  <Checkbox
                    onChange={handleSelectAll}
                    checked={selectedRows.length !== 0 && 'checked'}
                  />
                </th>
                <th className="p-3 text-gray-200">Data</th>
                <th className="p-3 text-gray-200">Durata</th>
                <th className="p-3 text-gray-200">Persoana</th>
                <th className="p-3 text-gray-200">Descriere</th>
              </tr>
              {data.pages.map((activity) => (
                <tr className="border odd:bg-blue-100" key={activity._id}>
                  <td className="p-3">
                    <Checkbox
                      onChange={handleSelect}
                      id={activity._id}
                      checked={selectedRows.includes(activity._id) && 'checked'}
                    />
                  </td>
                  <td className="p-3 w-40">{dateLocaleRo(activity.date)}</td>
                  <td className="p-3 w-28">
                    <FormatDuration duration={activity.duration} />
                  </td>
                  <td className="p-3 w-64">
                    <Link href={`/admin/timesheets/people/${activity.user._id}`}>
                      <a>{activity.user.first_name + ' ' + activity.user.last_name}</a>
                    </Link>
                  </td>
                  <td className="p-3">
                    <h3 className="line-clamp-2 py-0.5">{activity.description}</h3>
                  </td>
                </tr>
              ))}
            </table>
          )}
          {data.pageParams.count == 0 && (
            <h3 className="text-xl">Nu exista activitati pentru acest proiect.</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectTimesheetSuccess;
