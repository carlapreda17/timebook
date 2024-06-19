import { useProfile } from '../hooks';

export const userHasVotedOption = (option) => {
  const { me } = useProfile();
  return option.voters.find((voter) => voter._id === me._id);
};
