import React from 'react';
import { Link } from 'react-router-dom';

export default function DogDetails({ dog }) {
  return (
    <div key={dog.id}>
      <img src={dog.image}></img>
      <h1>{dog.name}</h1>
      <p>Age: {dog.age}</p>
      <p>Breed: {dog.breed}</p>
      <p>{dog.bio}</p>
      <Link key={dog.id} to={`/dogs/${dog.id}/edit`}>
        Edit
      </Link>
    </div>
  );
}
