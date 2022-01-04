import React from 'react';
import { useState, useEffect } from 'react';
import { fetchDogs } from '../../services/dog';
import DogList from '../../components/DogList';

export default function Dogs() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogs();
      setDogs(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <DogList dogs={dogs} />
    </div>
  );
}
