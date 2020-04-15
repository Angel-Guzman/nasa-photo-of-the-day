import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios';
import APOD from './APOD/APOD';

function App() {

  const [picture, setPicture] = useState(null)

  return (
    <div className="App">
      <APOD picture={picture} setPicture={setPicture} />
    </div>
  );
}

export default App;
