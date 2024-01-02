import React from "react";
import { BrowserRouter , Route,  Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/Java script/Login";
import Home from "./components/Java script/Home";
import Query from "./components/Java script/Query";
import Profile from "./components/Java script/Profile";
import Chat from "./components/Java script/Chat";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/query" element={<Query />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>    
      </BrowserRouter></div>


  );
}
export default App;
