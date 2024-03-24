import "../Exercises.css";
import Barbell_curl from '../gifs/Barbell_curl.gif';
import cable_curls from '../gifs/cable_curls.gif';
import dumbbels_curls from '../gifs/dumbbell_curls.gif'
import NavBar from '../components/navBar';
import Button from 'react-bootstrap/esm/Button';



const bicepsExercises = [
  {
    name: 'Barbell Curl',
    description: 'A barbell curl is a weightlifting exercise targeting the biceps muscles.'
    + 'To perform it, stand with feet shoulder-width apart, holding a barbell with an underhand grip, '
    + 'palms facing upward. Keep the upper arms stationary while curling the barbell towards the shoulders, '
    + 'exhaling as you lift and inhaling as you lower it back down, maintaining controlled movements throughout.',
    image: Barbell_curl
  },
  {
    name: 'Dumbbell Curl',
    description: 'Dumbbell curls are a fundamental strength-building exercise primarily targeting the biceps muscles. '
    + 'To perform them, stand upright with dumbbells in each hand, palms facing forward, and arms fully extended. '
    + 'Curl the dumbbells upward toward your shoulders while keeping your elbows close to your sides, then lower them back down to complete one repetition.',
    image: dumbbels_curls
  },
  {
    name: 'Cable Curl',
    description: 'Cable curls are a resistance exercise that targets the biceps muscles using a cable machine. '
    + 'Begin by standing with your feet shoulder-width apart and grabbing the cable attachment with an underhand grip. '
    + 'Curl the attachment upward toward your shoulders while keeping your elbows close to your sides, '
    + 'then slowly lower it back down to complete one repetition.',
    image: cable_curls
  },

];

function Bicep() {
  return (
    <div>
      <NavBar></NavBar>
      <h1>BICEP EXERCISES</h1>
      <Button className="back-button" href="/body" variant="btn btn-outline-dark">back to workout helper</Button>{' '}
      {bicepsExercises.map((exercise, index) => (
        <div class="container" key={index}>
          <h2>{exercise.name}</h2>
          <img className="wo" src={exercise.image} alt={exercise.name} style={{ maxWidth: '200px' }} />
          <p>{exercise.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Bicep;