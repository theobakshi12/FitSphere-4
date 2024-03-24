import "./App.css";
import Button from "react-bootstrap/Button";
import NavBar from "./components/navBar";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <img className="bg" src="background.png"></img>
      <div className="joinButton">
      <Button variant="light">Start Your Journey</Button>{' '}
      </div>
    </div>
  );
}

export default App;
