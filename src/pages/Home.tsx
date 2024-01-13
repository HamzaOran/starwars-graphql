import React, { useState } from 'react';
import useAllPeople from '../lib/graphql/hooks/useAllPeople';
import { PeopleType } from '../types';
import PeopleContainer from '../components/PeopleContainer';
import * as XLSX from 'xlsx';

const Home = () => {
  const { data, loading, error } = useAllPeople();
  const [displayedCount, setDisplayedCount] = useState(6);
  const [searchTerm, setSearchTerm] = useState('');

  if (loading)
    return (
      <div className="bg-white text-black text-3xl min-h-screen flex justify-center items-center">
        Loading...
      </div>
    );

  if (error) return <div>Error: {error.message}</div>;

  const { allPeople } = data;

  const toggleShowMore = () => {
    setDisplayedCount((prevCount) => prevCount + 6);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredPeople = allPeople?.people?.filter((insan: PeopleType) =>
    Object.values(insan).some(
      (value) =>
        typeof value === 'string' &&
        value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const handleDownload = () => {
    const wsData = filteredPeople?.map((insan: PeopleType) => ({
      ID: insan.id || '-',
      Name: insan.name || '-',
      Gender: insan.gender || '-',
      'Birth Year': insan.birthYear || '-',
      'Eye Color': insan.eyeColor || '-',
      'Hair Color': insan.hairColor || '-',
      'Skin Color': insan.skinColor || '-',
      Height: insan.height || '-',
      Mass: insan.mass || '-',
    }));

    const ws = XLSX.utils.json_to_sheet(wsData);

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'People Data');

    XLSX.writeFile(wb, 'people_data.xlsx');
  };

  return (
    <div className="mx-auto container flex flex-col items-center justify-center min-h-screen bg-white text-black  ">
      <div className="flex space-x-4 mt-4">
        <input
          type="text"
          placeholder="Search for term..."
          value={searchTerm}
          onChange={handleSearch}
          className="p-4 border  border-black text-xl"
        />
      </div>

      <div className="p-6 mx-auto sm:p-0 sm:mt-8 justify-center items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {(filteredPeople || allPeople?.people)
          ?.slice(0, displayedCount)
          .map((insan: PeopleType) => (
            <PeopleContainer key={insan.id} insan={insan} />
          ))}
      </div>

      {(filteredPeople || allPeople?.people)?.length > displayedCount && (
        <div className="flex justify-center">
          <button
            onClick={toggleShowMore}
            className="mt-10 bg-blue-300 text-black hover:bg-blue-500 py-2 px-4 mb-4 lg:text-xl md:text-lg text-base rounded-md w-30 flex items-center justify-center"
          >
            <span>More</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-10 h-10 ml-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      )}

      {filteredPeople && (
        <div className=" flex flex-col justify-center items-center mt-4 overflow-x-auto">
          <div className="flex flex-row justify-center items-center gap-3 mb-4">
            <h2 className="text-4xl font-bold">Excel Table</h2>
            <button onClick={handleDownload}>
              Download
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5 ml-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
          <table className="min-w-full bg-white border border-gray-300 mb-8">
            <thead>
              <tr className="py-2 px-4 border-b">
                <th>ID</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Birth Year</th>
                <th>Eye Color</th>
                <th>Hair Color</th>
                <th>Skin Color</th>
                <th>Height</th>
                <th>Mass</th>
              </tr>
            </thead>
            <tbody>
              {filteredPeople.map((insan: PeopleType) => (
                <tr key={insan.id} className="py-2 px-4 border-b">
                  <td>{insan.id || '-'}</td>
                  <td>{insan.name || '-'}</td>
                  <td>{insan.gender || '-'}</td>
                  <td>{insan.birthYear || '-'}</td>
                  <td>{insan.eyeColor || '-'}</td>
                  <td>{insan.hairColor || '-'}</td>
                  <td>{insan.skinColor || '-'}</td>
                  <td>{insan.height || '-'}</td>
                  <td>{insan.mass || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Home;
