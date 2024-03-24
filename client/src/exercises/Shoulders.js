import React from 'react';
import "../Exercises.css";
import shoulder_press from '../gifs/shoulder_press.gif'
import front_raises from '../gifs/front_raises.gif'
import lateral_raises from '../gifs/lateral_raises.gif'
import NavBar from '../components/navBar';
import Button from 'react-bootstrap/esm/Button';


const shoulderExercises = [
  {
    name: 'Shoulder Press',
    description: 'The shoulder press, also known as the overhead press, is a compound strength-training exercise targeting the deltoid '
    + 'muscles of the shoulders. To perform a shoulder press, sit or stand with a barbell or dumbbells held at shoulder height, palms '
    + 'facing forward. Press the weight upward until your arms are fully extended overhead, then lower it back down to shoulder height '
    + 'to complete one repetition. Shoulder presses are effective for building shoulder strength and mass, improving overhead pressing '
    + 'strength, and enhancing overall upper body development.',
    image: shoulder_press
  },
  {
    name: 'Front Dumbbell Raises',
    description: 'Front dumbbell raises are an isolation exercise primarily targeting the front deltoid muscles of the shoulders. '
    + 'To perform front dumbbell raises, stand with dumbbells in each hand, palms facing your thighs. Raise the dumbbells directly '
    + 'in front of you until they reach shoulder height, then slowly lower them back down to complete one repetition. Front dumbbell '
    + 'raises help develop shoulder strength and definition, particularly in the front deltoids, and are commonly included in '
    + 'shoulder-focused workout routines.',
    image: front_raises
  },
  {
    name: 'Lateral Dumbbell Raises',
    description: 'Lateral dumbbell raises are an isolation exercise targeting the lateral deltoid muscles of the shoulders. '
    + 'To perform lateral dumbbell raises, stand with dumbbells in each hand, palms facing your body. Lift the dumbbells out '
    + 'to the sides until they reach shoulder height, then lower them back down under control to complete one repetition. Lateral dumbbell '
    + 'raises help strengthen and sculpt the lateral deltoids, contributing to shoulder width and definition.',
    image: lateral_raises
  },

];

function Shoulders() {
  return (
    <div>
      <NavBar></NavBar>
      <h1>SHOULDER EXERCISES</h1>
      <Button className="back-button" href="/body" variant="btn btn-outline-dark">back to workout helper</Button>{' '}
      {shoulderExercises.map((exercise, index) => (
        <div class="container" key={index}>
          <h2>{exercise.name}</h2>
          <img className="wo" src={exercise.image} alt={exercise.name} style={{ maxWidth: '200px' }} />
          <p>{exercise.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Shoulders;