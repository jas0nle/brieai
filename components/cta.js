import React, { useState } from "react";
import Container from "./container";

const Cta = () => {
  const [uploadedVideo, setUploadedVideo] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setUploadedVideo(file);
  };

  const displayVideo = () => {
    if (uploadedVideo) {
      const videoURL = URL.createObjectURL(uploadedVideo);
      return (
        <video
          src={videoURL}
          controls
          className="mx-auto block"
          style={{ maxWidth: "100%", maxHeight: "100%", display: "block" }}
        />
      );
    } else {
      setErrorMessage("Please upload a video first.");
      return null;
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
              onClick={(event) => {
                event.preventDefault();
                displayVideo();
              }}
              className="inline-block py-3 mx-auto text-lg font-medium text-center text-indigo-600 bg-white rounded-md px-7 lg:px-10 lg:py-5 cursor-pointer"
            >
              Submit
            </button>
          </form>
          {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
        </div>
      </div>
      <div className="video-container fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-80 z-50">
        {displayVideo()}
      </div>
    </Container>
  );
};

export default Cta;
