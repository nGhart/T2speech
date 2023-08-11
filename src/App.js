import './App.css';
import React, { useState } from 'react';

function App() {
  const [inputText, setInputText] = useState('');
  function textToSpeech() {
    let speech = new SpeechSynthesisUtterance();

    speech.lang = 'en-US';
    speech.text = inputText;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
  }
  return (
    <>
      <div className="container">
        <h2 className="title">Text to Speech</h2>
        <form action="">
          <textarea
            id="userInput"
            placeholder="Enter text here"
            rows="4"
            cols="30"
            onChange={(text) => setInputText(text.target.value)}
            value={inputText}
          ></textarea>
        </form>
        <div className="buttonContainer">
          <button id="speakButton" onClick={textToSpeech}>
            <span className="material-symbols-outlined">mic</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
