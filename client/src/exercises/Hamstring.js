import React from 'react';
import "../Exercises.css";
import hamstring_curl from '../gifs/hamstring_curl.gif'
import deadlift from '../gifs/deadlift.gif'
import NavBar from '../components/navBar';
import Button from 'react-bootstrap/esm/Button';


const hamstringExercises = [
  {
    name: 'Deadlift',
    description: 'The deadlift is a compound strength-training exercise that targets multiple muscle groups, '
    + 'including the lower back, glutes, hamstrings, and core. To perform a deadlift, stand with feet shoulder-width apart, '
    + 'bend at the hips and knees to grip a barbell, and lift the weight by extending your hips and knees until standing upright. '
    + 'Lower the barbell back down to the ground under control to complete one repetition. Deadlifts are highly effective for building '
    + 'overall strength, enhancing posture, and developing functional movement patterns.',
    image: deadlift
  },
  {
    name: 'Hamstring Curl',
    description: 'The hamstring curl is a lower body exercise that targets the muscles of the hamstrings. '
    + 'To perform it, lie face down on a leg curl machine with your knees just off the end of the bench and '
    + 'the padded lever against the back of your ankles. Curl your heels towards your buttocks by flexing your knees, '
    + 'then slowly lower the weight back down to complete one repetition. Hamstring curls are effective for strengthening '
    + 'the hamstrings, improving knee stability, and enhancing athletic performance.',
    image: hamstring_curl
  },
];

function Hamstring() {
  return (
    <div>
      <NavBar></NavBar>
      <h1>HAMSTRING EXERCISES</h1>
      <Button className="back-button" href="/body" variant="btn btn-outline-dark">back to workout helper</Button>{' '}
      {hamstringExercises.map((exercise, index) => (
        <div class="container" key={index}>
          <h2>{exercise.name}</h2>
          <img className="wo" src={exercise.image} alt={exercise.name} style={{ maxWidth: '200px' }} />
          <p>{exercise.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Hamstring;