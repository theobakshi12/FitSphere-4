import React from 'react';
import hamstring_curl from '../gifs/hamstring_curl.gif'
import deadlift from '../gifs/deadlift.gif'

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

function ExerciseList() {
  return (
    <div>
      <h1>HamString Exercises</h1>
      {hamstringExercises.map((exercise, index) => (
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