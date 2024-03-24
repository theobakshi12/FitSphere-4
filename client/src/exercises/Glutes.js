import React from 'react';

const latExercises = [
  {
    name: 'Pull Up',
    description: 'Barbell curls are a classic biceps exercise that targets the biceps brachii muscle.',
    image: 'barbell_curl.jpg'
  },
  {
    name: 'Lat Pull Down',
    description: 'Hammer curls target the biceps brachii and the brachialis muscles and can help build forearm strength.',
    image: 'dumbbell_hammer_curl.jpg'
  },
  {
    name: 'Cable Row',
    description: 'Preacher curls isolate the biceps and minimize cheating, making them an effective exercise for targeting the biceps brachii.',
    image: 'preacher_curl.jpg'
  },
  // Add more exercises as needed
];

function ExerciseList() {
  return (
    <div>
      <h1>Lat Exercises</h1>
      {latExercises.map((exercise, index) => (
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