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
import {DateRangePicker, DefinedRange} from 'react-date-range';
import {ro} from "react-date-range/dist/locale";

const DateRangeMobile = ({ handleChange, range }) => {
  return (
   <div className="flex sm:hidden justify-center h-full w-full">
     <DateRangePicker
       onChange={handleChange}
       className="w-full flex flex-col justify-center items-center gap-4"
       direction="vertical"
       locale={ro}
       ranges={[range]}
       rangeColors={['#53B0AE']}
       inputRanges={[]}
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
             startDate: startOfWeek(new Date(), { weekStartsOn: 1 }),
             endDate: addDays(startOfWeek(new Date(), { weekStartsOn: 1 }), 6),
           }),
           isSelected() {
             return false;
           },
         },
         {
           label: 'Saptamana trecuta',
           range: () => ({
             startDate: startOfWeek(subDays(startOfWeek(new Date(), { weekStartsOn: 1 }), 6), {
               weekStartsOn: 1,
             }),
             endDate: endOfWeek(subDays(startOfWeek(new Date(), { weekStartsOn: 1 }), 6), {
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
     />
   </div>
  );
};

export default DateRangeMobile;
