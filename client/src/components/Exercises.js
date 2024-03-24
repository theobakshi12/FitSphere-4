import React from 'react';

class Exercise extends React.Component {
  render() {
    const { name, image, description } = this.props;

    return (
      <div>
        <h2>{name}</h2>
        <img src={image} alt={name} />
        <p>{description}</p>
      </div>
    );
  }
}

export default Exercise;