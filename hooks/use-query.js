import { stringifyUrl } from 'query-string';
import { useQuery as query } from 'react-query';
import { axiosAuth } from '../lib';

const useQuery = (url, options) => {
  const queryFn = ({ queryKey }) => {
    return axiosAuth(stringifyUrl({ url: queryKey, query: options }));
  };

  return query(stringifyUrl({ url, query: options }), queryFn);
};

export default useQuery;
