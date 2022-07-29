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
import SignIn from "./Components/Login";
import Admin from "./Admin/Admin";
import Create from "./Admin/User/Create";
import Table from "./Admin/User/Table";
import Blog from "./Components/Blog";

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
          <Route path="login" element={<SignIn />} />
          <Route path="Admin" element={<Admin />} />
          <Route path="Table" element={<Table />} />
          <Route path="create" element={<Create />} />
          <Route path="blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
      <></>
    </div>
  );
}

export default App;
