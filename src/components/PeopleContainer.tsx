import React from 'react';
import { PeopleType } from '../types';

interface PeopleContainerProps {
  insan: PeopleType;
}

const PeopleContainer: React.FC<PeopleContainerProps> = ({ insan }) => {
  return (
    <div className="container mx-auto xl:mx-auto bg-white text-white gap-16">
      <div className="grid grid-cols-1 gap-8 lg:mx-auto ">
        <div
          key={insan.id}
          className="bg-neutral-900 p-3 my-3 gap-8 rounded-md shadow-md font-semibold"
          style={{ width: '300px' }}
        >
          <h1 className="text-3xl font-bold mb-5">{insan.name}</h1>

          <div className="grid grid-cols-2">
            <div>
              <p>
                <span>Gender:</span> {insan.gender}
              </p>
              <p>
                <span>Birth Year:</span> {insan.birthYear}
              </p>
              <p>
                <span>Eye Color: </span> {insan.eyeColor}
              </p>
              <p>
                <span>Hair Color: </span> {insan.hairColor}
              </p>
            </div>
            <div>
              <p className="">
                <span>Height: </span> {insan.height}
              </p>
              <p className="">
                <span>Mass: </span> {insan.mass}
              </p>
              <p className="">
                <span>Skin Color: </span> {insan.skinColor}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleContainer;
