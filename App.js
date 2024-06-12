// src/App.js
import React from 'react';
import VideoUpload from './components/VideoUpload';
import TimestampDisplay from './components/TimestampDisplay';

const App = () => {
  const appStyles = {
    backgroundColor: '#ADD8E6',
    minHeight: '100vh',
  };

  // Define the videoPlayer object (this is just a placeholder for now)
  const videoPlayer = {
    seekTo: (timestamp) => {
      console.log(`Seeking to timestamp: ${timestamp}`);
      // Implement the actual logic to seek to the timestamp in your video player
    },
  };

  const keyphrases = [
    { keyword: 'Introduction', timestamp: '00:00:10' },
    { keyword: 'Main Content', timestamp: '00:05:30' },
    { keyword: 'Conclusion', timestamp: '00:15:45' },
    // Add more keyphrases as needed
  ];

  const handleTimestampClick = (timestamp) => {
    console.log(`Moving to timestamp: ${timestamp}`);
    // Call the seekTo method of the videoPlayer object
    videoPlayer.seekTo(timestamp);
  };

  return (
    <div style={appStyles}>
      <header>
        <h1>Video Content Analysis </h1>
        <h3>DCODE NET is a powerful video analysis tool using deep learning techniques that allows you to upload your videos and
        automatically generate Table of content based on the content of the video like title, graphical objects. This feature is
        particularly useful for quickly navigating through long videos.</h3>
      </header>
      <main>
        <VideoUpload />
        <TimestampDisplay keyphrases={keyphrases} onTimestampClick={handleTimestampClick} />
        <div>
          <h2>Table of contents - Graphical objects</h2>
          {/* The 'getRandomTimestamps' function is removed here */}
        </div>
      </main>
    </div>
  );
};

export default App;
