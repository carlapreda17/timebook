import { Checkbox } from '../Fields';

const UserTimesheetHead = ({ checked, toggleAll }) => (
  <thead>
    <tr className="bg-primary">
      <th className="p-3 w-8">
        <Checkbox
          checked={checked}
          onChange={toggleAll}
          className={
            'form-checkbox p-2 cursor-pointer checked:bg-primary ring-primary checked:border checked:border-white'
          }
        />
      </th>
      <th className="p-3 text-gray-200">Data</th>
      <th className="p-3 text-gray-200">Durata</th>
      <th className="p-3 text-gray-200">Proiect</th>
      <th className="p-3 text-gray-200">Descriere</th>
      <th className="p-3 text-gray-200 text-center">Actiuni</th>
    </tr>
  </thead>
);

export default UserTimesheetHead;
