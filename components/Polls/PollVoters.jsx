import PollVotersTooltip from '../PollVotersTooltip';

const PollVoters = ({ voters }) => {
  const formatNames = (voters) => {
    if (voters.length === 0) return '';
    if (voters.length === 1) return `${voters[0].first_name} ${voters[0].last_name}`;
    if (voters.length === 2)
      return `${voters[0].first_name} ${voters[0].last_name}, ${voters[1].first_name} ${voters[1].last_name}`;

    return `${voters[0].first_name} ${voters[0].last_name}, ${voters[1].first_name} ${voters[1].last_name}...`;
  };

  const names = formatNames(voters);

  const tooltipNames = voters
    .map(({ first_name, last_name }) => `${first_name} ${last_name}\n`)
    .join(', ');

  const shouldDisplayTooltip = voters.length > 2;

  return (
    <div className="w-fit">
      {shouldDisplayTooltip ? (
        <div>
          <PollVotersTooltip content={names} placement="bottom">
            <ul>
              {tooltipNames.split(', ').map((name, index) => (
                <li className="text-left" key={index}>
                  {name}
                </li>
              ))}
            </ul>
          </PollVotersTooltip>
        </div>
      ) : (
        <span>{names}</span>
      )}
    </div>
  );
};

export default PollVoters;
