import React from 'react';
import NavBar from './components/navBar';
import { useNavigate } from 'react-router-dom';
import "./Body.css"
import CircularButton from './CircularButton';

function Body() {
  const navigate = useNavigate();
  const buttons = [
    { id: 1, top: '24%', left: '29.3%', path: "/chest"}, //chest
    { id: 2, top: '21%', left: '22%', path: "/shoulders"}, //delt
    { id: 3, top: '29%', left: '21.5%', path: "/biceps"}, //biceps
    { id: 4, top: '51%', left: '25%', path: "/quads"}, //quads
    { id: 5, top: '35%', left: '29.3%', path: "/abs"}, //abs

    { id: 6, top: '30%', left: '66%', path: "/lats"}, //lats
    { id: 7, top: '44%', left: '66.5%', path: "/glutes"}, //glutes
    { id: 8, top: '27%', left: '61.5%', path: "/triceps"}, //triceps
    { id: 9, top: '57%', left: '64.5%', path: "/hamstring"}, //hamstring
    { id: 10, top: '69.5%', left: '63.1%', path: "/calves"}, //calves

  ];
    return (
      <div>
        <NavBar></NavBar>
        <h1>Weight Training Helper</h1>
        <h3>Choose a muscle group you want to target and learn the right exercises!</h3>
        <figure className="image-container">
          <img src="bodyparts.png"/>
          {buttons.map(btn => (
          <CircularButton
            href="/"
            key={btn.id}
            style={{ position: 'absolute', top: btn.top, left: btn.left }}
            onClick={() => navigate(btn.path)}
          >
          </CircularButton>
          ))}
        </figure>
      </div>
    );
  }

export default Body;