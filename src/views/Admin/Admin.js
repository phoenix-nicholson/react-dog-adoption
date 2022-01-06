import React from 'react';

import { useState } from 'react';
import DogForm from '../../components/DogForm';

export default function Admin() {
  const [dog, setDog] = useState({});

  const createDog = (key, value) => {
    dog[key] = value;
    setDog({ ...dog });
  };

  const handleSubmit = async (e) => {
    e.prevent.default();
    const createDogState = await createDog(dog);
  };

  return (
    <div>
      <DogForm {...dog} createDog={createDog} />
    </div>
  );
}
