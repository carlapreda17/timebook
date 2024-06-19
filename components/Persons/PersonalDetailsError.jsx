import { PersonalDataError } from '../MyProfile';
import { WorkDetailsError } from '../WorkDetails';

const PersonalDetailsError = () => {
  return (
    <>
      <PersonalDataError />
      <WorkDetailsError />
    </>
  );
};

export default PersonalDetailsError;
