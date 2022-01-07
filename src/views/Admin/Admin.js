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
    try {
      await createDog(dog);
      alert("You've succesfully created your dog");
    } catch (e) {
      alert('failed to create dog');
    }
  };

  return (
    <div>
      <DogForm {...dog} updateDogState={updateDogState} handleSubmit={handleSubmit} />
    </div>
  );
}
