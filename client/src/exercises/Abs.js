import React from 'react';
import russian_twist from '../gifs/russian_twist.gif'
import knee_raise from '../gifs/knee_raise.gif'

const abExercises = [
  {
    name: 'Hanging Knee Raises',
    description: 'Hanging knee raises are a bodyweight exercise targeting the abdominal muscles, particularly the lower abdominals. '
    + 'To perform hanging knee raises, hang from a pull-up bar with arms fully extended and knees bent. Engage your core muscles to '
    + 'lift your knees up toward your chest, then lower them back down under control to complete one repetition. Hanging knee raises '
    + 'are effective for strengthening the core, improving abdominal stability, and enhancing overall abdominal muscle definition.',
    image: knee_raise
  },
  {
    name: 'Russian Twist',
    description: 'Russian twists are a core-strengthening exercise that targets the obliques and abdominals. To perform Russian twists, '
    + 'sit on the ground with knees bent, lean back slightly, and hold a weight or medicine ball in front of your chest. Twist your torso '
    + 'to the left, then to the right, while keeping your core engaged and feet elevated, alternating sides to complete one repetition. '
    + 'Russian twists help improve rotational strength, stability, and overall core endurance.',
    image: russian_twist
  },

];

function Abs() {
  return (
    <div>
      <h1>Ab Exercises</h1>
      {abExercises.map((exercise, index) => (
        <div key={index}>
          <h2>{exercise.name}</h2>
          <img src={exercise.image} alt={exercise.name} style={{ maxWidth: '200px' }} />
          <p>{exercise.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Abs;