import React from 'react';
import { useState, useEffect } from 'react';
import { fetchDogs } from '../../services/dog';

export default function Dogs() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogs();
      setDogs(data);
    };
    fetchData();
  }, []);
  console.log(dogs);
  return <div>dog</div>;
}
