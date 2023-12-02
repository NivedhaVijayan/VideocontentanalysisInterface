// src/components/VideoUpload.js
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const VideoUpload = () => {
  const [uploadedVideo, setUploadedVideo] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    setUploadedVideo(URL.createObjectURL(file));
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
      <h2>Video Upload</h2>
      <div {...getRootProps()} style={dropzoneStyles}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the video file here...</p>
        ) : (
          <p>Drag 'n' drop a video file here, or click to select a file</p>
        )}
      </div>
      {uploadedVideo && (
        <div>
          <h3>Uploaded Video</h3>
          <video width="400" controls>
            <source src={uploadedVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
};

const dropzoneStyles = {
  border: '2px dashed #cccccc',
  borderRadius: '4px',
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer',
  margin: '20px 0',
};

export default VideoUpload;
