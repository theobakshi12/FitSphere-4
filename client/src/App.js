import "./App.css";
import Button from "react-bootstrap/Button";
import NavBar from "./components/navBar";

function App() {
  return (
    <div>
      <NavBar></NavBar>

      <img className="bg" src="background.png"></img>
      <div className="joinButton1">
      <Button variant="light">Get Started at a Gym</Button>{' '}
      </div>
      <div className="joinButton2">
      <Button variant="light">Get Started at Home</Button>{' '}
      </div>
    </div>
  );
}

export default App;
