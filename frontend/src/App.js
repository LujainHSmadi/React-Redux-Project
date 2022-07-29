import logo from './logo.svg';
import './App.css';
import Home from './Components/Home'
import About from "./Components/About";
import List from "./Components/List";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AgencyDetails from "./Components/AgencyDetails";
import SingleDetail from "./Components/SingleDetail";
import Agency from "./Components/Agency";
import AgentsDetail from "./Components/AgentsDetail";
import Agents from "./Components/Agents";
import NavBar from "./Layout/NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/List" element={<List />} />
          <Route path="/AgencyDetails" element={<AgencyDetails />} />
          <Route path="/SingleDetail" element={<SingleDetail />} />
          <Route path="/Agency" element={<Agency />} />
          <Route path="/AgentsDetail" element={<AgentsDetail />} />
          <Route path="/Agents" element={<Agents />} />
        </Routes>
      </BrowserRouter>
      <></>
    </div>
  );
}

export default App;
