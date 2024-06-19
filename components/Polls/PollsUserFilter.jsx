import { useQuery } from '../../hooks';

const PollsUserFilter = ({ setOptions }) => {
  const options = { active: true };
  const { data, status } = useQuery('identities', options);

  const setUserFilter = (userId) => {
    if (userId) {
      setOptions((prev) => ({
        ...prev,
        userId,
      }));
    } else {
      setOptions(({ userId, ...prev }) => prev);
    }
  };

  return (
    <div>
      <label className="font-semibold mb-1">{'Sortare dupa persoana'}</label>
      <select className="select" onChange={(e) => setUserFilter(e.target.value)} defaultValue={''}>
        <option value="">Toate persoanele</option>
        {status === 'success' &&
          data.map((user, index) => (
            <option key={index} className="w-full" value={user._id}>
              {user.first_name + ' ' + user.last_name}
            </option>
          ))}
      </select>
    </div>
  );
};

export default PollsUserFilter;
