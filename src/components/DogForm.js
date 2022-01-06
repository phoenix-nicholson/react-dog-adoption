import React from 'react';

export default function DogForm(dog, updateDog) {
  return (
    <form>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={dog.name}
          onChange={(e) => {
            updateDog('name', e.target.value);
          }}
        />
      </label>

      <label>
        Age:
        <input
          type="text"
          name="age"
          value={dog.age}
          onChange={(e) => {
            updateDog('age', e.target.value);
          }}
        />
      </label>

      <label>
        Image URL:
        <input
          type="text"
          name="image"
          value={dog.image}
          onChange={(e) => {
            updateDog('image', e.target.value);
          }}
        />
      </label>
      <label>
        Breed:
        <input
          type="text"
          name="breed"
          value={dog.breed}
          onChange={(e) => {
            updateDog('breed', e.target.value);
          }}
        />
      </label>
      <label>
        Bio:
        <input
          type="text"
          name="bio"
          value={dog.bio}
          onChange={(e) => {
            updateDog('bio', e.target.value);
          }}
        />
      </label>
    </form>
  );
}
