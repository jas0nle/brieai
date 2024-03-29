import React, { useState } from "react";
import Container from "./container";

const AIOutput = ({frameCount}) => {
  return (
    <Container>
        <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-indigo-600 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Here's how you can improve your workouts.
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            {frameCount}
          </p>
        </div>
      </div>
    </Container>
  );
};

export default AIOutput;
