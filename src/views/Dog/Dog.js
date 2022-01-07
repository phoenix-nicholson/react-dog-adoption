import React from 'react';
import { useState, useEffect } from 'react';
import { fetchDogsById } from '../../services/dog';
import DogDetails from '../../components/DogDetails-v2';
import { deleteDog } from '../../services/dog';

export default function Dog(props) {
  const [dog, setDog] = useState([]);
  const [loading, setLoading] = useState(true);
  const id = props.match.params.id;

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogsById(id);
      setDog(data);
      setLoading(false);
    };

    fetchData();
  }, [id]);

  setTimeout(() => {
    setLoading(false);
  }, 800);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await deleteDog(dog);
      alert("You've succesfully deleted your dog");
    } catch (e) {
      alert('failed to delete dog');
    }
    window.location.replace('/dogs');
  };

  return (
    <div>
      <DogDetails dog={dog} handleDelete={handleDelete} />
    </div>
  );
}
