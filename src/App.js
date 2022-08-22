// import
import './App.css';
import { useState } from 'react';
import NavBar from './components/layout/navbar';
import SideNav from './components/layout/sideeNav';
import ModelSection from './components/modelSection/modelSection';
// comp start
function App() {
  // state
  const [toggle, setToggle] = useState(false)
    // toggle side bar
    // const toggleNavBar = () => {
    //     setToggle(!toggle)
    // }
  return (
    <div className="App">
      {/* overlay */}
      {/* <div className='overlay absolute'></div> */}
      <div className="container m-auto">
           <NavBar toggle={toggle} setToggle={setToggle} />
           <SideNav toggle={toggle} setToggle={setToggle} />
      </div>
           <ModelSection
              name='Model Y'
              para='Order Online for Touchless Delivery'
              btn='send'
            />
    </div>
  );
}

export default App;
