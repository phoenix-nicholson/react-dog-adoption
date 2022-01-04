import React from 'react';
import { useState, useEffect } from 'react';
import { fetchDogsById } from '../../services/dog';
import DogDetails from '../../components/DogDetails';

export default function Dog(props) {
  const [dog, setDog] = useState([]);
  const [loading, setLoading] = useState(true);
  const id = props.match.params.id;

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogsById(id);
      setDog(data);
      setLoading(loading);
    };

    fetchData();
  }, [id, loading]);

  setTimeout(() => {
    setLoading(false);
  }, 1500);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <DogDetails dog={dog} />
    </div>
  );
}
