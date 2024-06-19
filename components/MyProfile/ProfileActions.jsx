import React, { useState } from 'react';
import { classnames } from '../../lib';
import { PersonProfilePageButtons } from '../Persons';
import ChangePasswordForm from '../Forms/ChangePasswordForm';

const ProfileActions = ({ id, data, show, forTechnicalPeople, ...props }) => {
  const [action, setAction] = useState('password');

  return (
    <div className="flex flex-col gap-2 bg-white rounded-xl p-2 sm:p-6 px-2 shadow w-full h-auto mt-4 mb-4 dark:bg-[#131b30]">
      <div className="flex gap-4 border-b text-base text-gray-500 dark:border-slate-700">
        <div
          className={classnames(
            'px-3 cursor-pointer transition pb-1 -mb-0.5',
            action === 'password' &&
              'border-b-2 text-primary font-medium border-primary dark:text-white dark:border-b-sky-500'
          )}
          onClick={() => setAction('password')}
        >
          Parolă
        </div>
        {forTechnicalPeople && (
          <div
            className={classnames(
              'px-3 cursor-pointer transition pb-1 -mb-0.5',
              action === 'actions' &&
                'border-b-2 text-primary font-medium border-primary dark:text-white dark:border-b-sky-500'
            )}
            onClick={() => setAction('actions')}
          >
            Actiuni
          </div>
        )}
      </div>
      <div className="p-3">
        <div className="flex flex-col gap-4">
          <div className="sm:max-w-xs" {...props}>
            {action === 'password' && <ChangePasswordForm id={id} />}
          </div>
          {action === 'actions' && forTechnicalPeople && (
            <div className="w-auto">
              <PersonProfilePageButtons data={data} show={show} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileActions;
