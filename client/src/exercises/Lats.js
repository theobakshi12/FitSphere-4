import React from 'react';
import "../Exercises.css";
import pull_up from '../gifs/pull_up.gif'
import lat_pulldown from '../gifs/lat_pulldown.gif'
import seated_row from '../gifs/seated_row.gif'
import NavBar from '../components/navBar';
import Button from 'react-bootstrap/esm/Button';


const latExercises = [
  {
    name: 'Pull Up',
    description: 'Pull-ups are a challenging bodyweight exercise that primarily target the upper back, arms, and shoulders. '
    + 'To perform a pull-up, grip an overhead bar with your hands shoulder-width apart, palms facing away from you, '
    + 'and hang with your arms fully extended. Pull yourself upward by engaging your back muscles until your chin reaches or clears the bar, '
    + 'then lower yourself back down to complete one repetition.',
    image: pull_up
  },
  {
    name: 'Lat Pulldown',
    description: 'Lat pulldowns are a strength-building exercise that targets the latissimus dorsi muscles of the back. '
    + 'Begin by sitting at a lat pulldown machine with your thighs secured under the pads and gripping the bar with hands '
    + 'wider than shoulder-width apart. Pull the bar down toward your chest while keeping your back straight, '
    + 'then slowly return the bar to the starting position to complete one repetition. This exercise helps improve back strength '
    + 'and overall upper body development.',
    image: lat_pulldown
  },
  {
    name: 'Cable Row',
    description: 'Cable rows are a compound exercise targeting the muscles of the upper back, including the latissimus dorsi, '
    + 'rhomboids, and traps. To perform cable rows, sit at a cable row machine with your knees slightly bent and feet firmly '
    + 'planted. Pull the cable attachment towards your abdomen, squeezing your shoulder blades together at the end of the movement, '
    + 'then slowly release the weight to return to the starting position for one repetition. Cable rows are effective for building '
    + 'back strength and improving posture.',
    image: seated_row
  },

];

function Lats() {
  return (
    <div>
      <NavBar></NavBar>
      <h1>LAT EXERCISES</h1>
      <Button className="back-button" href="/body" variant="btn btn-outline-dark">back to workout helper</Button>{' '}
      {latExercises.map((exercise, index) => (
        <div class="container" key={index}>
          <h2> {exercise.name}</h2>
          <img className="wo" src={exercise.image} alt={exercise.name} style={{ maxWidth: '200px' }} />
          <p>{exercise.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Lats;