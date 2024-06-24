import PersonsTableHead from './PersonsTableHead';
import PersonAge from '../Persons/PersonAge';
import { MessageNoRows, UserLink } from '../LogbookTable';
import PersonRowActions from './PersonRowActions';
import BirthdayTooltip from './BirthdayTooltip';
import React from "react";

const PersonsTableSuccess = ({ data, refetch }) => {
  const showPerson = (person) => {
    const { birthday, email, _id, job } = person;

    return (
      <tr className="table-row" key={`person-row-${_id}`}>
        <td className="p-3 tablet:text-xs">
          <UserLink {...person} />
        </td>
        <td className="p-3 w-80 tablet:text-xs">{job}</td>
        <td className="p-3 w-80 tablet:text-xs">{email}</td>
        <td className="p-3 w-32 tablet:text-xs">
          <BirthdayTooltip birthday={birthday}>
            <PersonAge birthday={birthday}/>
          </BirthdayTooltip>
        </td>
        <td className="p-3 w-20">
          <PersonRowActions refetch={refetch} person={person}/>
        </td>
      </tr>
    );
  };

  return (
    <div className="flex w-screen md:w-full overflow-x-auto relative flex-col -mx-4 md:mx-0">
        <table className="min-w-full tablet:mx-4">
          <PersonsTableHead/>
          <tbody>{data.map(showPerson)}
          {!data?.length && (
            <tr>
              <td colSpan="7">
                <MessageNoRows />
              </td>
            </tr>
          )}
          </tbody>
        </table>
    </div>
  );
};

export default PersonsTableSuccess;
