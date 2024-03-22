import React, { useState } from "react";
import Container from "./container";

const Cta = () => {
  const [uploadedVideo, setUploadedVideo] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setUploadedVideo(file);
  };


  const cv = require('opencv4nodejs');
  const fs = require('fs');
  const base64 = require('base64-js');

  const displayVideo = () => {
    const video = new cv.VideoCapture(uploadedVideo);
    const base64Frames = [];
    while (video.read()) {
      const frame = video.frame;
      const jpgBuffer = cv.imencode('.jpg', frame);
      const base64Encoded = base64.fromByteArray(jpgBuffer);
      base64Frames.push(base64Encoded);
    }
    video.release();
    console.log(base64Frames.length + ' frames read.');
  };

  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-indigo-600 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Ready to try BrieAI?
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            Join us today and experience the difference.
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <form action="" method="get" encType="multipart/form-data">
            <label
              htmlFor="upload-video"
              className="inline-block py-3 mr-3 mx-auto text-lg font-medium text-center text-indigo-600 bg-white rounded-md px-7 lg:px-10 lg:py-5 cursor-pointer"
            >
              {uploadedVideo ? `${uploadedVideo.name}` : "Upload Video"}
              <input
                type="file"
                id="upload-video"
                name="video"
                className="hidden"
                accept="video/*"
                onChange={handleFileUpload}
              />
            </label>
            <button
              id="button"
              onClick={displayVideo}
              className="inline-block py-3 mx-auto text-lg font-medium text-center text-indigo-600 bg-white rounded-md px-7 lg:px-10 lg:py-5 cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Cta;
