import React from 'react';

export default function DogDetails({ dog }) {
  return (
    <div key={dog.id}>
      <img src={dog.image}></img>
      <h1>{dog.name}</h1>
      <p>Age: {dog.age}</p>
      <p>Breed: {dog.breed}</p>
      <p>{dog.bio}</p>
    </div>
  );
}
