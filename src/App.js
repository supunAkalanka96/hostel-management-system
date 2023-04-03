import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </Router>
       */}

      <Navbar/>
      
    </div>
  );
}

export default App;
