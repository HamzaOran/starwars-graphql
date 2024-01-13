import { useQuery } from '@apollo/client';

import GET_ALL_PEOPLE from '../../queries';

const useAllPeople = () => {
  const { data, loading, error } = useQuery(GET_ALL_PEOPLE);
  return { data, loading, error };
};

export default useAllPeople;
