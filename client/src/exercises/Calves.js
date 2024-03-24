import React from 'react';
import "../Exercises.css";
import sitting_calf from '../gifs/seated_calf.gif';
import standing_calf from '../gifs/standing_calf.gif'
import NavBar from '../components/navBar';
import Button from 'react-bootstrap/esm/Button';


const calfExercises = [
  {
    name: 'Seated Calf Raise',
    description: 'Seated calf raises are a strength-training exercise that targets the calf muscles. To perform them, '
    + 'sit on a seated calf raise machine with your knees bent and feet on the platform. Push through the balls of your '
    + 'feet to raise the weight by extending your ankles, then lower the weight back down to complete one repetition. '
    + 'Seated calf raises help strengthen and define the calf muscles, aiding in ankle stability and athletic performance.',
    image: sitting_calf
  },
  {
    name: 'Standing Calf Raise',
    description: 'Standing calf raises are a lower body exercise targeting the calf muscles. To perform them, stand with feet '
    + 'hip-width apart and rise up onto the balls of your feet, lifting your heels as high as possible. Lower your heels back '
    + 'down to the ground under control to complete one repetition. Standing calf raises help strengthen and develop the calf '
    + 'muscles, improving ankle stability and athletic performance.',
    image: standing_calf
  },
];

function Calves() {
  return (
    <div>
      <NavBar></NavBar>
      <h1>CALF EXERCISES</h1>
      <Button className="back-button" href="/body" variant="btn btn-outline-dark">back to workout helper</Button>{' '}
      {calfExercises.map((exercise, index) => (
        <div class="container" key={index}>
          <h2>{exercise.name}</h2>
          <img className="wo" src={exercise.image} alt={exercise.name} style={{ maxWidth: '200px' }} />
          <p>{exercise.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Calves;