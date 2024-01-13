import { gql } from '@apollo/client';

const GET_ALL_PEOPLE = gql`
  query AllPeople {
    allPeople {
      totalCount
      people {
        id
        name
        gender
        birthYear
        eyeColor
        hairColor
        height
        mass
        skinColor
      }
    }
  }
`;

export default GET_ALL_PEOPLE;
