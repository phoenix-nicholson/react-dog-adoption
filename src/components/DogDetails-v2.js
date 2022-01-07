import React from 'react';
import { Link } from 'react-router-dom';

export default function DogDetails({ dog, handleDelete }) {
  return (
    <div key={dog.id}>
      <img src={dog.image}></img>
      <h1>{dog.name}</h1>
      <p>Age: {dog.age}</p>
      <p>Breed: {dog.breed}</p>
      <p>{dog.bio}</p>
      <Link className="Link" key={dog.id} to={`/dogs/${dog.id}/edit`}>
        Edit
      </Link>
      <button onClick={handleDelete}>Delete Post</button>
    </div>
  );
}
