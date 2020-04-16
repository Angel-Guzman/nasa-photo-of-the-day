import React, { useState } from "react";
import "./App.css";
import Nav from './Components/Nav'
import APOD from './Components/APOD'
import Signup from './Components/SignUp'
import Mars from './Components/Mars'
import Footer from './Components/Footer'

function App() {

  const [picture, setPicture] = useState(null)

  const [pictureTitle, setPictureTitle] = useState(null)

  const [pictureCopyright, setPictureCopyright] = useState(null)

  const [pictureDate, setPictureDate] = useState(null)

  const [pictureExplanation, setPictureExplanation] = useState(null)

  return (
    <div className="App">
      <Nav />
      <APOD picture={picture} setPicture={setPicture} pictureTitle={pictureTitle} setPictureTitle={setPictureTitle} pictureCopyright={pictureCopyright} setPictureCopyright={setPictureCopyright} pictureDate={pictureDate} setPictureDate={setPictureDate} pictureExplanation={pictureExplanation} setPictureExplanation={setPictureExplanation} />
      <Signup />
      <Mars />
      <Footer />
    </div>
  );
}

export default App;
