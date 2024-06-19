import { Checkbox } from '../Fields';

const ProjectTimesheetTableHead = ({ checked, toggleAll }) => (
  <thead>
    <tr className="border-b bg-primary border-gray-400">
      <th className="p-3 w-8">
        <Checkbox
          checked={checked}
          onChange={toggleAll}
          className={'form-checkbox p-2 cursor-pointer checked:bg-primary ring-primary'}
        />
      </th>

      <th className="p-3 text-gray-200">Data</th>
      <th className="p-3 text-gray-200">Durata</th>
      <th className="p-3 text-gray-200 ">Persoana</th>
      <th className="p-3 text-gray-200 ">Descriere</th>
    </tr>
  </thead>
);

export default ProjectTimesheetTableHead;
