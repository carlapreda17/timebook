import {
  addDays,
  endOfMonth,
  endOfWeek,
  endOfYear,
  startOfMonth,
  startOfWeek,
  startOfYear,
  subDays,
  subMonths,
  subYears,
} from 'date-fns';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { DateRangePicker } from 'react-date-range';
import { ro } from 'react-date-range/dist/locale';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { dateLocaleRo, isValidDate } from '../../functions';
import DateRangeMobile from './DateRangeMobile';

const EMPTY_RANGE = {
  startDate: null,
  endDate: new Date(''),
};

const DateRange = ({ onChange,isOnLogbook=false ,isProjectPage=false, options, ...props}) => {
  const [showDateRange, setShowDateRange] = useState(false);
  const defaultDate = options ? { startDate: options.from, endDate: options.to } : EMPTY_RANGE;
  const [range, setRange] = useState(defaultDate);

  const openDateRange = () => {
    setShowDateRange(true);
  };
  const hideDateRange = () => {
    setShowDateRange(false);
  };

  const handleChange = (item) => {
    setRange(item['range1']);
  };

  const handleReset = () => {
    setRange(EMPTY_RANGE);
    if (typeof onChange === 'function') {
      onChange({});
    }
    hideDateRange();
  };

  const onConfirm = () => {
    hideDateRange();
    if (typeof onChange === 'function') {
      onChange({
        from: isValidDate(range.startDate) && range.startDate,
        to: isValidDate(range.endDate) && range.endDate,
      });
    }
  };

  return (
    <div {...props}>
      <div>
        <label className="label">Dată început</label>
        <div
          className={`input relative flex items-center cursor-pointer h-11.5 p-3 tablet:w-56 ${isOnLogbook || isProjectPage ? 'laptop:w-80' : ''} ${!isProjectPage ? 'sm:w-48' : 'sm:w-56'}`}
          onClick={openDateRange}
        >
          <p className="tablet:text-xs">{isValidDate(range?.startDate) ? dateLocaleRo(range.startDate) : 'Alegeti o data'}</p>
          <i className="fas fa-calendar text-lg ml-4 absolute right-3 text-gray-500 dark:text-slate-600" />
        </div>
      </div>
      <div>
        <label className="label">Dată sfârșit</label>
        <div
          className={`input relative flex items-center cursor-pointer h-11.5 p-3 tablet:w-56 ${isOnLogbook || isProjectPage ? 'laptop:w-80' : ''} ${!isProjectPage ? 'sm:w-48' : 'sm:w-56'}`}
          onClick={openDateRange}
        >
          <p className="tablet:text-xs">{isValidDate(range?.endDate) ? dateLocaleRo(range?.endDate) : 'Alegeti o data'}</p>
          <i className="fas fa-calendar text-lg ml-4 absolute right-3 text-gray-500 dark:text-slate-600" />
        </div>
      </div>
      <Modal
        className="flex items-center"
        size="lg"
        dialogClassName="w-full mx-3 sm:mx-auto lg:w-5/12"
        centered
        show={showDateRange}
        onHide={hideDateRange}
      >
        <h2 className="py-6 px-6 text-2xl laptop:text-lg tablet:text-base font-semibold dark:text-white">
          Alegeți intervalul de timp
        </h2>
        {/* For resolutions > 640px */}
        <DateRangePicker
          onChange={handleChange}
          months={1}
          direction="horizontal"
          ranges={[range]}
          locale={ro}
          staticRanges={[
            {
              label: 'Astazi',
              range: () => ({
                startDate: new Date(),
                endDate: new Date(),
              }),
              isSelected() {
                return false;
              },
            },
            {
              label: 'Ieri',
              range: () => ({
                startDate: addDays(new Date(), -1),
                endDate: addDays(new Date(), -1),
              }),
              isSelected() {
                return false;
              },
            },
            {
              label: 'Saptamana aceasta',
              range: () => ({
                startDate: startOfWeek(new Date(), {weekStartsOn: 1}),
                endDate: addDays(startOfWeek(new Date(), {weekStartsOn: 1}), 6),
              }),
              isSelected() {
                return false;
              },
            },
            {
              label: 'Saptamana trecuta',
              range: () => ({
                startDate: startOfWeek(subDays(startOfWeek(new Date(), {weekStartsOn: 1}), 6), {
                  weekStartsOn: 1,
                }),
                endDate: endOfWeek(subDays(startOfWeek(new Date(), {weekStartsOn: 1}), 6), {
                  weekStartsOn: 1,
                }),
              }),
              isSelected() {
                return false;
              },
            },
            {
              label: 'Luna aceasta',
              range: () => ({
                startDate: startOfMonth(new Date()),
                endDate: endOfMonth(new Date()),
              }),
              isSelected() {
                return false;
              },
            },
            {
              label: 'Luna trecuta',
              range: () => ({
                startDate: startOfMonth(subMonths(new Date(), 1)),
                endDate: endOfMonth(subMonths(new Date(), 1)),
              }),
              isSelected() {
                return false;
              },
            },
            {
              label: 'Anul acesta',
              range: () => ({
                startDate: startOfYear(new Date()),
                endDate: endOfYear(new Date()),
              }),
              isSelected() {
                return false;
              },
            },
            {
              label: 'Anul trecut',
              range: () => ({
                startDate: startOfYear(subYears(new Date(), 1)),
                endDate: endOfYear(subYears(new Date(), 1)),
              }),
              isSelected() {
                return false;
              },
            },
          ]}
          inputRanges={[]}
          rangeColors={['#53B0AE']}
          className="pl-4 pr-6 h-full tablet:hidden flex"
        />
        {/* For resolutions < 640px */}
          <DateRangeMobile handleChange={handleChange} range={range}/>
        <div className="flex mx-6 my-6 gap-4 justify-between flex-col lg:flex-row ">
          <div className="flex gap-4 flex-col lg:flex-row">
            <button className="cancel" onClick={hideDateRange}>
              Anulează
            </button>
            <button className="delete" onClick={handleReset}>
              Șterge filtrul
            </button>
          </div>
          <button className="confirm" onClick={onConfirm}>
            Alege
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default DateRange;
