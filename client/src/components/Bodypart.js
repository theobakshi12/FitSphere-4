import Exercise from "./Exercises";
import React from 'react'

class Bodypart extends React.Component {
    render() {
      const { name, bodypart, image, description } = this.props;
    return (
      <div>
        <h1>{bodypart}</h1>
        <Exercise 
          name={name}
          image={image}
          description={description}
        />
        <Exercise
         name={name}
         image={image}
         description={description}
        />
      </div>
    );
  }}

  export default Bodypart;