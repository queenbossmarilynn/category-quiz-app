// import { Switch } from '@mui/material';
import { useState } from "react";
import {Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Quiz/Quiz";
import Result from "./Pages/Result/Result";

function App() {
  const [name, setName] = useState("");
  const fetchQuestions = () => {};

  return (
    <>
      <div className="app" style={{backgroundImage:"url('./purple-bg.png')"}}>
        <Header />
       
        <Routes>
          <Route path='/' exact element={<Home name={name} setName={setName} fetchQuestions={fetchQuestions}/>} />
          <Route path='/quiz' exact element={<Quiz/>} />
          <Route path='/result' exact element={<Result/>} />
        </Routes>
        
      </div>

      <Footer className="footer"/>
    </>
  );
}

export default App;
