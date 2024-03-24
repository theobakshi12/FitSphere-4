import React from 'react';
import "../Exercises.css";
import squats from '../gifs/squat.gif'
import split_squats from '../gifs/split_squat.gif'
import leg_extension from '../gifs/leg_extension.gif'
import NavBar from '../components/navBar';
import Button from 'react-bootstrap/esm/Button';

const quadExercises = [
  {
    name: 'Squats',
    description: 'Squats are a compound strength-training exercise that targets multiple muscle groups, including the quadriceps, '
    + 'hamstrings, glutes, and lower back. To perform a squat, stand with feet shoulder-width apart, lower your body by bending your '
    + 'knees and hips, keeping your chest up and back straight, and then return to a standing position by driving through your heels. '
    + 'Squats are highly effective for building lower body strength, improving overall athleticism, and enhancing functional movement '
    + 'patterns.',
    image: squats
  },
  {
    name: 'Leg Extension',
    description: 'Leg extensions are an isolation exercise that primarily targets the quadriceps muscles of the thighs. '
    + 'To perform leg extensions, sit on a leg extension machine with your knees bent and feet hooked under the padded lever. '
    + 'Extend your legs upward against the resistance of the machine until your legs are straight, then lower them back down under '
    + 'control to complete one repetition. Leg extensions are effective for strengthening the quadriceps and are often included in '
    + 'lower body workout routines to complement compound exercises like squats and lunges.',
    image: leg_extension
  },
  {
    name: 'Split Squats',
    description: 'Split squats, also known as stationary lunges, are a unilateral lower body exercise that targets the quadriceps, '
    + 'hamstrings, glutes, and calves. To perform split squats, stand in a split stance with one foot forward and the other foot '
    + 'extended behind you on a bench or elevated surface. Lower your body by bending both knees until the back knee nearly touches '
    + 'the ground, then push through the front heel to return to the starting position. Split squats help improve balance, coordination, '
    + 'and lower body strength while also addressing muscular imbalances between the legs.',
    image: split_squats
  },

];

function Quads() {
  return (
    <div>
      <NavBar></NavBar>
      <h1>QUAD EXERCISES</h1>
      <Button className="back-button" href="/body" variant="btn btn-outline-dark">back to workout helper</Button>{' '}
      {quadExercises.map((exercise, index) => (
        <div class="container" key={index}>
          <h2>{exercise.name}</h2>
          <img className="wo" src={exercise.image} alt={exercise.name} style={{ maxWidth: '200px' }} />
          <p>{exercise.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Quads;