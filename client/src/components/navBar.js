import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../Calendar.css';
import { useState } from 'react';
import "../App.css";
import TrackerCalendar from '../TrackerCalendar';
import { useAppContext } from '../AppContext'; 


function NavBar() {
  const [date, setDate] = useState(new Date());
  const { highlightedDaysCount, monthlyGoal, setMonthlyGoal } = useAppContext();

  const handleMonthlyGoalChange = (event) => {
    setMonthlyGoal(event.target.value); // Update monthly goal in context
  };

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
              
              <h3 className='text-center'>Tracker</h3>
                <div className='calendar-container'>
                  <TrackerCalendar onChange={setDate} value={date} />
                </div>
                <div className="dropdown">Workouts this month: {highlightedDaysCount}</div>
                <div className="dropdown">Monthly goal: 
                  <input 
                    type="number" 
                    value={monthlyGoal} 
                    onChange={handleMonthlyGoalChange} 
                    style={{ marginLeft: '10px', width: '60px' }}
                  />
                </div>
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