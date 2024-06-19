import { dateLocaleRo } from '../../functions';
import getRole from '../../functions/role';
import { classnames } from '../../lib';
import UserInitialsAvatar from '../UserInitialsAvatar';

const MyProfileSuccess = ({ data }) => {
  return (
    <div
      className={classnames(
        'flex flex-col items-center justify-center gap-6 bg-white rounded-xl shadow py-9 w-full md:w-96 h-full dark:bg-[#131b30]'
      )}
    >
      <div className="flex flex-col items-center">
        <UserInitialsAvatar
          name={data.first_name + ' ' + data.last_name}
          backgroundColor={data.active ? 'bg-secondary' : 'bg-accent'}
        />
        <div className="flex flex-col items-center">
          <p className="text-lg font-semibold dark:text-white">
            {data.first_name + ' ' + data.last_name}
          </p>
          <p className="text-gray-500 dark:text-slate-400">{data.job}</p>
        </div>
      </div>
      <div className="flex flex-col divide-y-2 dark:divide-slate-700">
        <div className="flex items-center py-2">
          <i
            className={classnames(
              'fa-solid fa-briefcase mr-2 text-xl',
              data.active ? 'text-secondary' : 'text-accent'
            )}
          ></i>
          <p className="dark:text-white">{getRole(data)}</p>
        </div>
        <div className="flex items-center py-2">
          <i
            className={classnames(
              'fa-solid fa-envelope mr-2 text-xl',
              data.active ? 'text-secondary' : 'text-accent'
            )}
          ></i>
          <p className="dark:text-white">{data.email}</p>
        </div>
        <div className="flex items-center py-2">
          <i
            className={classnames(
              'fa-solid fa-cake-candles mr-2 text-xl',
              data.active ? 'text-secondary' : 'text-accent'
            )}
          ></i>
          <div className="flex gap-1">
            <p className="font-medium dark:text-white">{dateLocaleRo(data.birthday)}</p>
          </div>
        </div>
        <div className="flex items-center py-2">
          <i
            className={classnames(
              'fa-solid fa-calendar-plus mr-2 text-xl',
              data.active ? 'text-secondary' : 'text-accent'
            )}
          ></i>
          <div className="flex gap-1 dark:text-white">
            <p>Creat pe </p>
            <p className="font-medium">{dateLocaleRo(data.createdAt)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfileSuccess;
