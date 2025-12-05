import React, { useRef, useEffect } from "react";
import { useInView } from "framer-motion";
import video from './assets/workout.mp4';

function Video() {
  const videoRef = useRef(null);
  const isInView = useInView(videoRef, { threshold: 0.5 }); // Trigger when 50% of the video is in view

  useEffect(() => {
    let timer;
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play(); // Play the video when in view
        timer = setTimeout(() => {
          videoRef.current.pause(); // Stop the video after 2 seconds
        }, 2000); // 2000ms = 2 seconds
      } else {
        videoRef.current.pause(); // Pause the video when out of view
      }
    }

    return () => clearTimeout(timer); // Cleanup the timer on component unmount or when `isInView` changes
  }, [isInView]);

  return (
    <div className="relative w-full sm:h-[30%vh] pb-[56.25%] lg:pb-[33.75%] overflow-hidden">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={video} // Replace with the actual path to your video
        type="video/mp4"
        muted
      ></video>
    </div>
  );
}

export default Video;