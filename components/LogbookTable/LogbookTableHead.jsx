import { Checkbox } from '../Fields';

const LogbookTableHead = ({ checked, toggleAll }) => (
  <thead>
    <tr className=" bg-primary">
      <th className="p-3 w-8">
        <Checkbox
          checked={checked}
          onChange={toggleAll}
          className={
            'form-checkbox sm:p-2 cursor-pointer checked:bg-primary ring-primary border border-white'
          }
        />
      </th>
      <th className="table-head-text">Data</th>
      <th className="table-head-text">Durata</th>
      <th className="table-head-text">Proiect</th>
      <th className="table-head-text">Persoana</th>
      <th className="table-head-text">Descriere</th>
      <th className="table-head-text text-center">Actiuni</th>
    </tr>
  </thead>
);

export default LogbookTableHead;
