import { Checkbox } from '../Fields';

const ProjectTimesheetTableHead = ({ checked, toggleAll }) => (
  <thead>
    <tr className="border-b bg-primary border-gray-400">
      <th className="p-3 w-8">
        <Checkbox
          checked={checked}
          onChange={toggleAll}
          className={'form-checkbox sm:p-2 cursor-pointer checked:bg-primary ring-primary'}
        />
      </th>

      <th className="p-3 text-gray-200 tablet:text-xs">Data</th>
      <th className="p-3 text-gray-200 tablet:text-xs">Durata</th>
      <th className="p-3 text-gray-200 tablet:text-xs">Persoana</th>
      <th className="p-3 text-gray-200 tablet:text-xs">Descriere</th>
    </tr>
  </thead>
);

export default ProjectTimesheetTableHead;
