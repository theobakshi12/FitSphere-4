import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../Calendar.css';
import { useState } from 'react';
import "../App.css";
import TrackerCalendar from '../TrackerCalendar';

function NavBar() {
  const [date, setDate] = useState(new Date());

  return (
    <Navbar>
      <Container className="bg-body-tertiary">
      <img src="/fitsphere.png" class="rounded-float-left" alt="..."/>
        <Navbar.Brand className="logo" href="/">FITSPHERE</Navbar.Brand>
        <NavDropdown className="workouts" title="Workouts" id="basic-nav-dropdown">
              <NavDropdown.Item href="/body">Gym Workouts</NavDropdown.Item>
              <NavDropdown.Item href="/homebody">Home Workouts (No Equipment)</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className="workouts" title="Progress" id="basic-nav-dropdown">
              <NavDropdown.Item>17 🏋️</NavDropdown.Item>
              <h1 className='text-center'>Workout Tracker</h1>
                <div className='calendar-container'>
                  <TrackerCalendar onChange={setDate} value={date} />
                </div>
                <p className='text-center'>
                  <span className='bold'>Selected Date:</span>{' '}
                  {date.toDateString()}
                </p>
              <button>+</button>
            </NavDropdown>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Guest</a>
          </Navbar.Text>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;