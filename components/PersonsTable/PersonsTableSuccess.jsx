import PersonsTableHead from './PersonsTableHead';
import PersonAge from '../Persons/PersonAge';
import { MessageNoRows, UserLink } from '../LogbookTable';
import PersonRowActions from './PersonRowActions';
import BirthdayTooltip from './BirthdayTooltip';

const PersonsTableSuccess = ({ data, refetch }) => {
  const showPerson = (person) => {
    const { birthday, email, _id, job } = person;

    return (
      <tr className="table-row" key={`person-row-${_id}`}>
        <td className="p-3">
          <UserLink {...person} />
        </td>
        <td className="p-3 w-80">{job}</td>
        <td className="p-3 w-80">{email}</td>
        <td className="p-3 w-32">
          <BirthdayTooltip birthday={birthday}>
            <PersonAge birthday={birthday} />
          </BirthdayTooltip>
        </td>
        <td className="p-3 w-20">
          <PersonRowActions refetch={refetch} person={person} />
        </td>
      </tr>
    );
  };

  return (
    <div className="flex flex-col w-full">
      <table className="min-w-full">
        <PersonsTableHead />
        <tbody>{data.map(showPerson)}</tbody>
      </table>
      {!data?.length && <MessageNoRows />}
    </div>
  );
};

export default PersonsTableSuccess;
