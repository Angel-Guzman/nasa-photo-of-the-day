import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios';
import APOD from './APOD/APOD';

function App() {

  const [picture, setPicture] = useState(null)

  const [pictureTitle, setPictureTitle] = useState(null)

  const [pictureCopyright, setPictureCopyright] = useState(null)

  const [pictureDate, setPictureDate] = useState(null)

  const [pictureExplanation, setPictureExplanation] = useState(null)

  return (
    <div className="App">
      <APOD picture={picture} setPicture={setPicture} pictureTitle={pictureTitle} setPictureTitle={setPictureTitle} pictureCopyright={pictureCopyright} setPictureCopyright={setPictureCopyright} pictureDate={pictureDate} setPictureDate={setPictureDate} pictureExplanation={pictureExplanation} setPictureExplanation={setPictureExplanation} />
    </div>
  );
}

export default App;
