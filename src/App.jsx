import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Light from './components/light';

function App() {
  return (
    <>
      <div className="container-fluid">
        <div id='trafficTop'></div>
        <div id='trafficLight'>
          <Light color={["red", "yellow", "green"]} />
        </div>
      </div>
    </>
  )
}

export default App

