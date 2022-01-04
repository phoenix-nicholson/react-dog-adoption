import React from 'react';
import { useState, useEffect } from 'react';
import { fetchDogsById } from '../../services/dog';
import DogDetails from '../../components/DogDetails';

export default function Dog(props) {
  const [dog, setDog] = useState([]);
  const id = props.match.params.id;

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogsById(id);
      setDog(data);
    };

    fetchData();
  }, [id]);
  return (
    <div>
      <DogDetails dog={dog} />
    </div>
  );
}
