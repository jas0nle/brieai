import React, { useState } from "react";
import Container from "./container";

const Cta = () => {
  const [uploadedVideo, setUploadedVideo] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setUploadedVideo(file);
  };

  const displayVideo = () => {
    console.log("test");
    if (uploadedVideo) {
      console.log("viduploaded");
      const videoURL = URL.createObjectURL(uploadedVideo);
      const videoElement = document.createElement('video');
      videoElement.src = videoURL;
      videoElement.controls = true;
      const container = document.createElement('div');
      container.appendChild(videoElement);

      // Append the container to the document body
      document.body.appendChild(container);
    } else {
      console.log("error");
      alert("Please upload a video first.");
    }
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
