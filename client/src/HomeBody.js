import React from 'react';
import NavBar from './components/navBar';
import { useNavigate } from 'react-router-dom';
import "./Body.css"
import CircularButton from './CircularButton';

function HomeBody() {
  const navigate = (path) => window.open(path, '_blank');
  const buttons = [
    { id: 1, top: '24%', left: '79.3%', path: "https://www.youtube.com/watch?v=BkS1-El_WlE&pp=ygUiY2hlc3Qgd29ya291dCBhdCBob21lIG5vIGVxdWlwbWVudA%3D%3D"}, //chest
    { id: 2, top: '21%', left: '73%', path: "https://www.youtube.com/watch?v=mwTKZ9VX6-8&pp=ygUwc2hvdWxkZXJzIHdvcmtvdXQgYXQgaG9tZSBubyBlcXVpcG1lbnQgYmVnaW5uZXJz"}, //delt
    { id: 3, top: '29%', left: '71.5%', path: "https://www.youtube.com/watch?v=wwKb-wZCEjs&pp=ygUjYmljZXBzIHdvcmtvdXQgYXQgaG9tZSBubyBlcXVpcG1lbnQ%3D"}, //biceps
    { id: 4, top: '51%', left: '75%', path: "https://www.youtube.com/watch?v=C5aHk9mrLv8&pp=ygUscXVhZHMgd29ya291dCBhdCBob21lIG5vIGVxdWlwbWVudCBiZWdpbm5lcnM%3D"}, //quads
    { id: 5, top: '35%', left: '79.3%', path: "https://www.youtube.com/watch?v=tfL4g3l2X4Y&pp=ygUqYWJzIHdvcmtvdXQgYXQgaG9tZSBubyBlcXVpcG1lbnQgYmVnaW5uZXJz"}, //abs

    { id: 6, top: '30%', left: '116%', path: "https://www.youtube.com/watch?v=SOvsUhLCdys&pp=ygUhbGF0cyB3b3Jrb3V0IGF0IGhvbWUgbm8gZXF1aXBtZW50"}, //lats
    { id: 7, top: '44%', left: '117%', path: "https://www.youtube.com/watch?v=6hOAGDbkLOw&pp=ygUtZ2x1dGVzIHdvcmtvdXQgYXQgaG9tZSBubyBlcXVpcG1lbnQgYmVnaW5uZXJz"}, //glutes
    { id: 8, top: '27%', left: '111.5%', path: "https://www.youtube.com/watch?v=z8_fSUc7MTw&pp=ygUudHJpY2VwcyB3b3Jrb3V0IGF0IGhvbWUgbm8gZXF1aXBtZW50IGJlZ2lubmVycw%3D%3D"}, //triceps
    { id: 9, top: '57%', left: '115%', path: "https://www.youtube.com/watch?v=9N3kVU_tj7s&pp=ygUwaGFtc3RyaW5nIHdvcmtvdXQgYXQgaG9tZSBubyBlcXVpcG1lbnQgYmVnaW5uZXJz"}, //hamstring
    { id: 10, top: '69.5%', left: '113%', path: "https://www.youtube.com/watch?v=-tJSMx4n6-g&pp=ygUtY2FsdmVzIHdvcmtvdXQgYXQgaG9tZSBubyBlcXVpcG1lbnQgYmVnaW5uZXJz"}, //calves

  ];
    return (
      <div>
        <NavBar></NavBar>
        <h1 className="header1">Home Workout Helper</h1>
        <h3 className="header">Choose a muscle group you want to target and learn the right exercises!</h3>
        <figure className="image-container">
          <img className="image"src="bodyparts.png"/>
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

export default HomeBody;