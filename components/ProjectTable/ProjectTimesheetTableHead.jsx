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

      <th className="table-head-text">Data</th>
      <th className="table-head-text">Durata</th>
      <th className="table-head-text">Persoana</th>
      <th className="table-head-text">Descriere</th>
    </tr>
  </thead>
);

export default ProjectTimesheetTableHead;
