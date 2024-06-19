import { useQuery } from '../../hooks';
import { PersonalData } from '../MyProfile';
import { WorkDetails } from '../WorkDetails';

const PersonalDetails = ({ person }) => {
  const { data } = useQuery(`activities`, { userId: person._id, order: 'date' });
  return (
    <>
      <PersonalData data={person} />
      {data?.pages.length > 0 && <WorkDetails data={data?.pages} />}
      {data?.pages.length === 0 && (
        <h3 className="font-bold text-xl mx-8 mb-8">
          Persoana nu are activitati asociate in acest moment.
        </h3>
      )}
    </>
  );
};

export default PersonalDetails;
