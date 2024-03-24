import React from 'react';
import squats from '../gifs/squat.gif'
import split_squats from '../gifs/split_squat.gif'
import hip_thrust from '../gifs/hip_thrust.gif'

const gluteExercises = [
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
    name: 'Split Squats',
    description: 'Split squats, also known as stationary lunges, are a unilateral lower body exercise that targets the quadriceps, '
    + 'hamstrings, glutes, and calves. To perform split squats, stand in a split stance with one foot forward and the other foot '
    + 'extended behind you on a bench or elevated surface. Lower your body by bending both knees until the back knee nearly touches '
    + 'the ground, then push through the front heel to return to the starting position. Split squats help improve balance, coordination, '
    + 'and lower body strength while also addressing muscular imbalances between the legs.',
    image: split_squats
  },
  {
    name: 'Hip Thrust',
    description: 'The hip thrust is a compound exercise primarily targeting the glutes and hamstrings. To perform a hip thrust, '
    + 'sit on the floor with your upper back against a bench, knees bent, and feet flat on the ground. Thrust your hips upward by '
    + 'driving through your heels until your body forms a straight line from shoulders to knees, then lower your hips back down to '
    + 'complete one repetition. Hip thrusts are effective for building strength, power, and muscle mass in the posterior chain, and '
    + 'they are often incorporated into lower body workout routines for enhanced glute development.',
    image: hip_thrust
  },

];

function ExerciseList() {
  return (
    <div>
      <h1>Glute Exercises</h1>
      {gluteExercises.map((exercise, index) => (
        <div key={index}>
          <h2>{exercise.name}</h2>
          <img src={exercise.image} alt={exercise.name} style={{ maxWidth: '200px' }} />
          <p>{exercise.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ExerciseList;