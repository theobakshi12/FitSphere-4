import React from 'react';
import tricep_push from '../gifs/tricep_push.gif'
import tricep_extension from '../gifs/tricep_extension.gif'

const tricepExercises = [
  {
    name: 'Overhead Tricep Extension',
    description: 'Overhead tricep extension is a strength-training exercise that targets the triceps muscles. To perform it, '
    + 'hold a dumbbell or a weight plate overhead with both hands, arms fully extended. Lower the weight behind your head by '
    + 'bending your elbows, then straighten your arms to lift the weight back up, fully extending your elbows to complete one '
    + 'repetition. Overhead tricep extensions are effective for building triceps strength and mass, often included in upper body '
    + 'workout routines to target the back of the arms.',
    image: tricep_extension
  },
  {
    name: 'Cable Tricep Push',
    description: 'Cable tricep push is a resistance exercise that targets the triceps muscles. To perform it, '
    + 'stand facing away from a cable machine with a rope or straight bar attachment in hand, and elbows bent. '
    + 'Extend your arms downward until they are straight, squeezing the triceps, then return to the starting position '
    + 'to complete one repetition. Cable tricep push is effective for isolating and strengthening the triceps, contributing '
    + 'to improved arm definition and strength.',
    image: tricep_push
  },
];

function Triceps() {
  return (
    <div>
      <h1>Tricep Exercises</h1>
      {tricepExercises.map((exercise, index) => (
        <div key={index}>
          <h2>{exercise.name}</h2>
          <img src={exercise.image} alt={exercise.name} style={{ maxWidth: '200px' }} />
          <p>{exercise.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Triceps;