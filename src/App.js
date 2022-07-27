import "./App.css";


//react redux
import fetchCommunityInfo from "./Store/community-action";
import eventsCommunityInfo from "./Store/events";
import { useDispatch} from "react-redux";
import { useEffect } from "react";

//Header and Footer Import
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";

//Since all the pages would have header and Footer,these two components must not not used inside of Routes element

//Pages import

import HomePage from "./Pages/home";
import Community from "./Pages/community";
import Event from "./Pages/event";
import About from "./Pages/about";
import DataSet from "./Pages/datasets";


//

import { Routes, Route, Navigate } from "react-router";

function App() {

  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(fetchCommunityInfo());
    dispatch(eventsCommunityInfo());
  },[dispatch]);

  return (
    <div className="App">
      <div style={{
        height:"10vh",
        width:"100%",
        backgroundColor:"royalblue",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        color:"white",
        fontSize:"1.1rem"
      }}>
        <span>Welcome to our beta webiste 🎉</span>
      </div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/community" element={<Community />} />
        <Route path="/events" element={<Event />} />
        <Route path="/about" element={<About />} />
        <Route path="/datasets" element={<DataSet />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
