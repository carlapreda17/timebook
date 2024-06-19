import { useState } from 'react';
import Tooltip from '../Tooltip';
import AreYouSureRomanian from '../AreYouSureRomanian';
import truncate from '../../functions/truncate';
import dateLocaleRo from '../../functions/dateLocaleRo';
import { deleteActivity } from '../../api/activities';
import { toaster } from '../../lib';
import coffee from '../../functions/coffee';

const PersonalTimeSheetRowSuccess = ({ date, duration, project, description, _id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(true);
  const hideModal = () => setIsOpen(false);
  return (
    <>
      <tr className="even:bg-gray-100 cursor-pointer">
        <td className="p-4 px-8 w-24">
          <p className="w-24">{dateLocaleRo(date)}</p>
        </td>
        <td className="p-4 w-24">
          <span className="w-24">{duration} minute</span>
        </td>
        <td className="p-4 w-52 max-w-52">
          <p className=" w-full line-clamp-1 font-bold">{truncate(project.name, 25)}</p>
        </td>
        <td className="p-4 whitespace-pre-wrap">
          <p className="line-clamp-2">{description}</p>
        </td>
        <td className="p-4 w-24">
          <div className="flex w-16 justify-between">
            <button title="Șterge" onClick={handleClick}>
              {' '}
              <Tooltip icon="fa-solid fa-trash text-red-700 text-lg">Șterge</Tooltip>
            </button>
          </div>
        </td>
      </tr>
      <AreYouSureRomanian
        isOpen={isOpen}
        hide={hideModal}
        iAmSure={async () => {
          try {
            await deleteActivity(_id);
            toaster.success('Activitatea a fost stearsa cu succes!');
            await coffee(500);
            hideModal();
            window.location.reload();
          } catch (err) {
            toaster.error('Activitatea nu a putut fi stearsa!');
          }
        }}
      >
        Esti sigur ca doesti sa stergi aceasta activitate?
      </AreYouSureRomanian>
    </>
  );
};

export default PersonalTimeSheetRowSuccess;
