import React from "react";
import Flower from "../assets/images/flower.png";

function App() {
  return (
    <>
      <div className="w-full h-[80%] py-34 flex justify-between px-16  max-md:flex-col">
        {/* Left Section - Text */}
        <div className="w-1/2 max-md:w-full">
          <h1 className="text-[9rem] font-bold leading-none max-lg:text-7xl">Hello,</h1>
          <h2 className="text-6xl font-bold mt-4 max-lg:text-5xl">I am Prabhat.</h2>
          <p className="text-xl my-10 max-lg:text-[1.15rem]">
            I started coding about a year ago just for fun—and now I’m all in. I
            enjoy turning ideas into real projects, learning new tech, and
            leveling up my skills one line of code at a time.
          </p>
        </div>

        {/* Right Section - Image */}
        <div className="h-[500px] mx-1 lg:px-10 flex max-lg:h-96 max-md:h-80">
          <img
            src={Flower}
            alt="A decorative flower"
            className="border object-cover"
          />
        </div>
      </div>
    </>
  );
}

export default App;
