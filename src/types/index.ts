export interface DataType {
  data: {
    allPeople: AllPeopleType;
  };
}

export interface AllPeopleType {
  totalCount: number;
  people: PeopleType[];
}

export interface PeopleType {
  id: string;
  name: string;
  gender: string;
  birthYear: string;
  eyeColor: string;
  hairColor: string;
  height: string;
  mass: string;
  skinColor: string;
}
