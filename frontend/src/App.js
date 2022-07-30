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
import Admin from "./Admin/Home";
import CreateUser from "./Admin/User/Create";
import TableUser  from "./Admin/User/Table";
import EditUser  from "./Admin/User/Edit";
import CreateAd from "./Admin/Ad/Create";
import TableAd from "./Admin/Ad/Table";
import EditAd from "./Admin/Ad/Edit";
import CreatePost from "./Admin/Post/Create";
import TablePost from "./Admin/Post/Table";
import EditPost from "./Admin/Post/Edit";
import CreateComments from "./Admin/Comments/Create";
import TableComments from "./Admin/Comments/Table";
import EditComments from "./Admin/Comments/Edit";
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
          <Route path="blog" element={<Blog />} />

          {/* admin Routes */}
           {/* User */}
          <Route path="Admin" element={<Admin />} />
          <Route path="usercreate" element={<CreateUser />} />
          <Route path="useredit" element={<EditUser />} />
          <Route path="usertable" element={<TableUser />} />
          {/* Comments */}
          <Route path="commentcreate" element={<CreateComments />} />
          <Route path="commentedit" element={<TableComments />} />
          <Route path="commenttable" element={<EditComments />} />
            {/* Ads */}
          <Route path="adcreate" element={<CreateAd/>} />
          <Route path="adedit" element={<EditAd />} />
          <Route path="adtable" element={<TableAd />} />
            {/* Posts */}
          <Route path="postcreate" element={<CreatePost />} />
          <Route path="postedit" element={<EditPost />} />
          <Route path="posttable" element={<TablePost />} />
        </Routes>
      </BrowserRouter>
      <></>
    </div>
  );
}

export default App;
