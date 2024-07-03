import {
  CalendarHeaderArrows,
  CalendarHeaderFilters,
  CalendarHeaderButtons,
  CalendarTitle,
  WeeklyViewToggle,
} from '.';

const CalendarHeader = ({
  dates,
  setDates,
  setOptions,
  refetch,
  options,
  role,
  showWeekend,
  setShowWeekend,
  view,
  setView,
}) => {
  return (
    <div className="w-full flex flex-col gap-6 bg-primary text-white rounded-t-xl p-5">
      <div className="flex flex-row mobile:grid items-center justify-between">
        <div className="flex items-center gap-4">
          <CalendarHeaderArrows
            dates={dates}
            setDates={setDates}
            setOptions={setOptions}
            options={options}
            view={view}
          />
          <CalendarTitle dates={dates} />
        </div>
        <CalendarHeaderButtons role={role} refetch={refetch} />
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-2 sm:gap-4">
        <CalendarHeaderFilters
          setOptions={setOptions}
          setShowWeekend={setShowWeekend}
          showWeekend={showWeekend}
        />
        <WeeklyViewToggle
          view={view}
          setView={setView}
          dates={dates}
          setDates={setDates}
          setOptions={setOptions}
          options={options}
        />
      </div>
    </div>
  );
};

export default CalendarHeader;
