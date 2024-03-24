import React from 'react';
import "../Exercises.css";
import bench_press from '../gifs/bench_press.gif'
import chest_press from '../gifs/Chest_press.gif'
import NavBar from '../components/navBar';
import Button from 'react-bootstrap/esm/Button';


const chestExercises = [
  {
    name: 'Bench Press',
    description: 'The bench press is a compound strength-training exercise that primarily targets the chest, shoulders, and triceps muscles. '
    + 'It involves lying on a flat bench and lifting a barbell upwards from the chest until the arms are fully extended. '
    + 'The bench press is a staple exercise in weightlifting and is often used to build overall upper body strength and muscle mass.',
    image: bench_press
  },
  {
    name: 'Chest Press',
    description: 'The chest press is a strength-training exercise that primarily targets the muscles of the chest, shoulders, and triceps. '
    + 'To perform a chest press, lie on a flat bench with your feet flat on the ground, holding dumbbells or a barbell above your chest '
    + 'with arms extended. Lower the weights down towards your chest, then press them back up to the starting position, exhaling as you '
    + 'push. This exercise is effective for developing upper body strength and muscle mass in the chest region.',
    image: chest_press
  },
  
];

function Chest() {
  return (
    <div>
      <NavBar></NavBar>
      <h1>CHEST EXERCISES</h1>
      <Button className="back-button" href="/body" variant="btn btn-outline-dark">back to workout helper</Button>{' '}
      {chestExercises.map((exercise, index) => (
        <div class="container" key={index}>
          <h2>{exercise.name}</h2>
          <img className="wo" src={exercise.image} alt={exercise.name} style={{ maxWidth: '200px' }} />
          <p>{exercise.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Chest;