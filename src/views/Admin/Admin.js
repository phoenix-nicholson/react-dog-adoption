import React from 'react';

import { useState } from 'react';
import DogForm from '../../components/DogForm';
import { createDog } from '../../services/dog';

export default function Admin() {
  const [dog, setDog] = useState({});

  const updateDogState = (key, value) => {
    dog[key] = value;
    setDog({ ...dog });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createDog(dog);
    if (dog !== '') {
      alert("You've successfully added a dog");
    } else {
      alert('Request to database has failed, please try again');
    }
  };

  return (
    <div>
      <DogForm {...dog} updateDogState={updateDogState} handleSubmit={handleSubmit} />
    </div>
  );
}
