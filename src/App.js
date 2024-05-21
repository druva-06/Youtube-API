import { useState } from 'react'

import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Videos from "./components/videos/Videos";

function App() {

  const [youtubeTokenKey, setYoutubeTokenKey] = useState(JSON.parse(localStorage.getItem('youtubeTokenKey')));

  if(youtubeTokenKey === null){
    const apiKey = prompt("Enter the Youtube api key")
    localStorage.setItem('youtubeTokenKey', JSON.stringify(apiKey));
    setYoutubeTokenKey(apiKey)
  }

  const [searchContent, setSearchContent] = useState("reactjs");

  return (
    <div>
      <Navbar setSearchContent={setSearchContent}/>
      <Videos searchContent={searchContent} youtubeTokenKey={youtubeTokenKey}/>
    </div>
  );
}

export default App;
