import React from 'react';
import { Link } from 'react-router-dom';

export default function DogList({ dogs }) {
  return (
    <div>
      {dogs.map((item) => (
        <div key={item.id}>
          <h1>Meet {item.name}</h1>

          <Link key={item.id} to={`/dogs/${item.id}`}>
            <img src={item.image}></img>
          </Link>

          <p>
            {item.name} is a {item.age} year old {item.breed}
          </p>
        </div>
      ))}
    </div>
  );
}
