import { formatDistanceToNow } from 'date-fns';
import { ro } from 'date-fns/locale';

const NotificationsMenu = () => {
  const distance = [
    formatDistanceToNow(new Date(2024, 4, 23), { locale: ro }),
    formatDistanceToNow(new Date(2024, 3, 18), { locale: ro }),
    formatDistanceToNow(new Date(2024, 2, 14), { locale: ro }),
    formatDistanceToNow(new Date(2024, 2, 10), { locale: ro }),
    formatDistanceToNow(new Date(2024, 2, 9), { locale: ro }),
  ];

  return (
    <>
      <div className="flex cursor-default justify-center gap-1 items-center py-2 px-4 border-b text-base font-medium text-center text-gray-700 bg-gray-50 dark:border-slate-700 dark:text-slate-200 dark:bg-slate-700">
        <p>Notificări</p>
        <p className="text-blue-600 dark:text-sky-500 -mt-2 text-xs">BETA</p>
      </div>
      <div className="flex py-3 px-4 border-b hover:bg-gray-100 dark:border-b-slate-700 dark:hover:bg-slate-700">
        <div className="flex-shrink-0">
          <img
            className="w-12 h-12 rounded-full"
            src="/images/serban-profilepic.webp"
            alt="profile-pic"
          />
          <div className="flex absolute justify-center items-center ml-8 -mt-4 w-6 h-6 rounded-full text-white bg-gradient-to-b from-pink-400 to-pink-600">
            <i className="fa-solid fa-cake-candles"></i>
          </div>
        </div>
        <div className="pl-5 cursor-default w-full">
          <div className="text-gray-500 dark:text-slate-300 font-normal text-sm mb-1.5">
            <span className="font-semibold text-gray-900 dark:text-slate-100">
              Șerban Căpățînă{' '}
            </span>
            își sărbătorește astăzi ziua de naştere! Urează-i la mulți ani!
          </div>
          <div className="text-xs font-medium text-blue-600 dark:text-sky-500">
            Acum {distance[0]}
          </div>
        </div>
      </div>
      <div className="flex py-3 px-4 border-b hover:bg-gray-100 dark:border-b-slate-700 dark:hover:bg-slate-700">
        <div className="flex-shrink-0">
          <img
            className="w-12 h-12 rounded-full"
            src="/images/mihai-profilepic.webp"
            alt="profile-pic"
          />
          <div className="flex absolute justify-center items-center ml-8 -mt-4 w-6 h-6 rounded-full text-white bg-gradient-to-b from-pink-400 to-pink-600">
            <i className="fa-solid fa-cake-candles"></i>
          </div>
        </div>
        <div className="pl-5 cursor-default w-full">
          <div className="text-gray-500 dark:text-slate-300 font-normal text-sm mb-1.5">
            <span className="font-semibold text-gray-900 dark:text-slate-100">Mihai Dulgheru</span>{' '}
            și-a sărbătorit ziua de naștere!
          </div>
          <div className="text-xs font-medium text-blue-600 dark:text-sky-500">
            Acum {distance[1]}
          </div>
        </div>
      </div>
      <div className="flex py-3 px-4 border-b hover:bg-gray-100 dark:border-b-slate-700 dark:hover:bg-slate-700">
        <div className="flex-shrink-0">
          <img
            className="w-12 h-12 rounded-full"
            src="/images/arthur-profilepic.webp"
            alt="profile-pic"
          />
          <div className="flex absolute justify-center items-center ml-8 -mt-4 w-6 h-6 rounded-full text-white bg-gradient-to-b from-pink-400 to-pink-600">
            <i className="fa-solid fa-cake-candles"></i>
          </div>
        </div>
        <div className="pl-5 cursor-default w-full">
          <div className="text-gray-500 dark:text-slate-300 font-normal text-sm mb-1.5">
            <span className="font-semibold text-gray-900 dark:text-slate-100">Artur Spunei</span>{' '}
            și-a sărbătorit ziua de naștere!
          </div>
          <div className="text-xs font-medium text-blue-600 dark:text-sky-500">
            Acum {distance[2]}
          </div>
        </div>
      </div>
      <div className="flex py-3 px-4 border-b hover:bg-gray-100 dark:border-b-slate-700 dark:hover:bg-slate-700">
        <div className="flex-shrink-0">
          <img
            className="w-12 h-12 rounded-full"
            src="/images/vicky-profilepic.webp"
            alt="profile-pic"
          />
          <div className="flex absolute justify-center items-center ml-8 -mt-4 w-6 h-6 rounded-full text-white bg-gradient-to-b from-blue-400 to-blue-600">
            <i className="fa-solid fa-chart-simple"></i>
          </div>
        </div>
        <div className="pl-5 cursor-default w-full">
          <div className="text-gray-500 dark:text-slate-300 font-normal text-sm mb-1.5">
            <span className="font-semibold text-gray-900 dark:text-slate-100">
              Victor Ocnărescu
            </span>{' '}
            a creat un sondaj. Vezi rezultatele sondajului.
          </div>
          <div className="text-xs font-medium text-blue-600 dark:text-sky-500">
            Acum {distance[3]}
          </div>
        </div>
      </div>
      <div className="flex py-3 px-4 border-b hover:bg-gray-100 dark:border-b-slate-700 dark:hover:bg-slate-700">
        <div className="flex-shrink-0">
          <img
            className="w-12 h-12 rounded-full"
            src="/images/vicky-profilepic.webp"
            alt="profile-pic"
          />
          <div className="flex absolute justify-center items-center ml-8 -mt-4 w-6 h-6 rounded-full text-white bg-gradient-to-b from-blue-400 to-blue-600">
            <i className="fa-solid fa-chart-simple"></i>
          </div>
        </div>
        <div className="pl-5 cursor-default w-full">
          <div className="text-gray-500 dark:text-slate-300 font-normal text-sm mb-1.5">
            <span className="font-semibold text-gray-900 dark:text-slate-100">
              Victor Ocnărescu
            </span>{' '}
            a creat un sondaj. Vezi rezultatele sondajului.
          </div>
          <div className="text-xs font-medium text-blue-600 dark:text-sky-500">
            Acum {distance[4]}
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-2 items-center hover:bg-gray-100 py-3 px-4 cursor-pointer font-medium text-gray-700 bg-gray-50 dark:bg-slate-700 border-t dark:border-t-slate-600 dark:text-slate-300">
        <i className="fa-regular fa-eye"></i>
        <p>Vezi tot</p>
      </div>
    </>
  );
};

export default NotificationsMenu;
