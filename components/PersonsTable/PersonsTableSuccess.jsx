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
        <td className="p-3 tablet:w-1/5 tablet:text-xs">
          <UserLink {...person} />
        </td>
        <td className="p-3 w-80 tablet:w-1/5 tablet:text-xs">{job}</td>
        <td className="p-3 w-80 tablet:w-1/5 tablet:text-xs">{email}</td>
        <td className="p-3 w-32 tablet:w-1/5 tablet:text-xs">
          <BirthdayTooltip birthday={birthday}>
            <PersonAge birthday={birthday}/>
          </BirthdayTooltip>
        </td>
        <td className="p-3 w-20 tablet:w-1/5">
          <PersonRowActions refetch={refetch} person={person}/>
        </td>
      </tr>
    );
  };

  return (
    <div className="flex flex-col w-full">
      <div className="overflow-x-auto">
        <table className="min-w-full whitespace-nowrap">
          <PersonsTableHead/>
          <tbody>{data.map(showPerson)}</tbody>
        </table>
      </div>
      {!data?.length && <MessageNoRows/>}
    </div>
  );
};

export default PersonsTableSuccess;
