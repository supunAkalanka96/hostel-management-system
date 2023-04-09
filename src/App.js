import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Landing from "./pages/Landing";
import AboutUs from "./pages/AboutUs";
import Dashboard from "./pages/Dashboard";
import AddHostel from "./components/dashboard/adminFunctions/AddHostel";
import AddSubWarden from "./components/dashboard/adminFunctions/AddSubWarden";
import AllHostelList from "./components/dashboard/adminFunctions/AllHostelList";
import AllSubWardenList from "./components/dashboard/adminFunctions/AllSubWardenList";
import SendMassage from "./components/dashboard/adminFunctions/SendMassage";
import AllStudentList from "./components/dashboard/adminFunctions/AllStudentList";
import SubWardensDashboard from "./pages/SubWardensDashboard";
import SendMassageToStudent from "./components/subwardenDashboard/functions/SendMassageToStudent";
import StudentDashboard from "./pages/StudentDashboard";
import StuDashboard from "./components/studentDashboard/functions/StuDashboard";
import Appliction from "./components/studentDashboard/functions/Appliction";
import MessageToSubwarden from "./components/studentDashboard/functions/MessageToSubwarden";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/hostels" element={<AboutUs/>}/>
          <Route path="/adminDashboard" element={<Dashboard/>}/>
          <Route path="/subwardensDashboard" element={<SubWardensDashboard/>}/>
          <Route path="/studentDashboard" element={<StudentDashboard/>}/>
          <Route path="/addHostel" element={<AddHostel/>}/>
          <Route path="/addSubWarden" element={<AddSubWarden/>}/>
          <Route path="/allHostels" element={<AllHostelList/>}/>
          <Route path="/allStudents" element={<AllStudentList/>}/>
          <Route path="/allSubwarden" element={<AllSubWardenList/>}/>
          <Route path="/sendMassages" element={<SendMassage/>}/>
          <Route path="/messages" element={<SendMassageToStudent/>}/>
          <Route path="/applicationDashboard" element={<StuDashboard/>}/>
          <Route path="/application" element={<Appliction/>}/>
          <Route path="/messageToSubwarden" element={<MessageToSubwarden/>}/>
          

        </Routes>
      </Router>

      
    </div>
  );
}

export default App;
