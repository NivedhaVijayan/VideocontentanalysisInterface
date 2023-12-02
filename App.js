// src/App.js
import React from 'react';
import VideoUpload from './components/VideoUpload';
import TimestampDisplay from './components/TimestampDisplay';

const App = () => {
  const appStyles = {
    backgroundColor: '#ADD8E6',
    minHeight: '100vh',
  };

  const keyphrases = [
    { keyword: 'Introduction', timestamp: '00:00:10' },
    { keyword: 'Main Content', timestamp: '00:05:30' },
    { keyword: 'Conclusion', timestamp: '00:15:45' },
    // Add more keyphrases as needed
  ];

  const handleTimestampClick = (timestamp) => {
    console.log(`Moving to timestamp: ${timestamp}`);
    // Implement the logic to move to the specific timestamp in your video player
    // Example: You may want to call a function from your video player to seek to the timestamp
    // videoPlayer.seekTo(timestamp);
  };

  return (
    <div style={appStyles}>
      <header>
        <h1>Video Content Analysis</h1>
      </header>
      <main>
        <VideoUpload />
        <TimestampDisplay keyphrases={keyphrases} onTimestampClick={handleTimestampClick} />
        <div>
          <h2>Random Timestamps</h2>
          {/* The 'getRandomTimestamps' function is removed here */}
        </div>
      </main>
    </div>
  );
};

export default App;
