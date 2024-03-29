import React, { useState } from "react";
import Container from "./container";

const Cta = ({setFrameCount}) => {
  const [uploadedVideo, setUploadedVideo] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setUploadedVideo(file);
    setUploadSuccess(false); // Reset upload success status
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!uploadedVideo) {
      console.log("No video selected");
      return;
    }

    const formData = new FormData();
    formData.append("video", uploadedVideo);

    try {
      const response = await fetch("http://localhost:5000/upload-video", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Frame count:", data.frame_count);
        setFrameCount(data.frame_count); // Set the frame count state
        setUploadSuccess(true);
        // Reset the uploadedVideo state if needed
        setUploadedVideo(null);
      } else {
        console.error("Failed to upload video");
      }
    } catch (error) {
      console.error("Error uploading video:", error);
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
            Join us today and experience the difference!
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <label
              htmlFor="upload-video"
              className="inline-block py-3 mr-3 my-3 mx-auto text-lg font-medium text-center text-indigo-600 bg-white rounded-md px-7 lg:px-10 lg:py-5 cursor-pointer"
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
              type="submit"
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
