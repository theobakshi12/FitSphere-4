import React from 'react';
import Exercise from './components/Exercises'; // Assuming Exercise.js is in the same directory
import Bodypart from './components/Bodypart';

const exerciseList = [
    {
        name: "Push-ups",
        bodypart: "chest",
        image: "pushups.jpg",
        description: "Push-ups are a great bodyweight exercise for strengthening the upper body and core."
    }, 
    {
        name: "Squats",
        bodypart: "quads",
        image: "squats.jpg",
        description: "Squats are a compound exercise that targets the muscles of the lower body, including the quadriceps, hamstrings, and glutes.",

    }
]

function Exercises() {
    return (
      <div>
        <h1>Exercise List</h1>
        <Exercise 
          name="Push-ups"
          image="pushups.jpg"
          description="Push-ups are a great bodyweight exercise for strengthening the upper body and core."
        />
        <Exercise
          name="Squats"
          image="squats.jpg"
          description="Squats are a compound exercise that targets the muscles of the lower body, including the quadriceps, hamstrings, and glutes."
        />
      </div>
    );
  }

export default Exercises;