import React from 'react';
import { useState, useEffect } from 'react';
import { fetchDogs } from '../../services/dog';
import DogList from '../../components/DogList';

export default function Dogs() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogs();
      setDogs(data);
      setLoading(loading);
    };
    fetchData();
  }, [loading]);

  setTimeout(() => {
    setLoading(false);
  }, 1500);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <DogList dogs={dogs} />
    </div>
  );
}
