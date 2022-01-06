import React from 'react';
import { useState, useEffect } from 'react';
import DogForm from '../../components/DogForm';
import { fetchDogsById, updateDog } from '../../services/dog';

export default function DogEdit(props) {
  const [dog, setDog] = useState({});
  const [loading, setLoading] = useState(true);
  const id = props.match.params.id;

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogsById(id);
      setDog(data);
      setLoading(false);
    };
    fetchData();
  }, [id, loading]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  const updateDogState = (key, value) => {
    dog[key] = value;
    setDog({ ...dog });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateDog(dog);
  };

  return (
    <div>
      <DogForm {...dog} updateDogState={updateDogState} handleSubmit={handleSubmit} />
    </div>
  );
}
