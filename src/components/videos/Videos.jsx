import React, { useEffect, useState } from "react";
import axios from "axios";


import "./videos.css";

export default function Videos({searchContent, youtubeTokenKey}) {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getSearchVideos = async() => {
        const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?key=${youtubeTokenKey}&part=snippet&maxResults=21&q=${searchContent}`)
        setVideos(response.data.items)
    }
    getSearchVideos();
  }, [searchContent, youtubeTokenKey])
  

  return (
    <section className="videos-list">
      <div className="videos">
        {videos.map((item,index) => (
            item.id.videoId && <div key={item.id.videoId+index} className="video">
                <iframe src={`https://www.youtube.com/embed/${item.id.videoId}?autoplay=0`} frameBorder="0" allowFullScreen={true} webkitallowfullscreen="true" mozallowfullscreen="true" title={item.id.videoId}></iframe>
            </div>
        ))}
        
      </div>
    </section>
  );
}
