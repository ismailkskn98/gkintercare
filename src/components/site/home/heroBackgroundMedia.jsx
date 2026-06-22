"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const videoSource = "/videos/hero-video-last.mp4";
const fallbackImage = "/videos/hero-video-poster.jpg";
const revealAfterSeconds = 0.15;

export default function HeroBackgroundMedia() {
  const videoRef = useRef(null);
  const [isVideoReady, setIsVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return undefined;

    const revealVideoWhenReady = () => {
      const hasVisibleFrame = video.currentTime >= revealAfterSeconds && video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA;

      if (!video.paused && hasVisibleFrame) {
        setIsVideoReady(true);
      }
    };
    const showFallback = () => setIsVideoReady(false);

    video.addEventListener("playing", revealVideoWhenReady);
    video.addEventListener("timeupdate", revealVideoWhenReady);
    video.addEventListener("error", showFallback);
    revealVideoWhenReady();

    return () => {
      video.removeEventListener("playing", revealVideoWhenReady);
      video.removeEventListener("timeupdate", revealVideoWhenReady);
      video.removeEventListener("error", showFallback);
    };
  }, []);

  return (
    <div className="fluid absolute inset-0 overflow-hidden bg-primary">
      <Image src={fallbackImage} alt="" fill priority sizes="100vw" className="object-cover object-center" />
      <video
        ref={videoRef}
        aria-hidden="true"
        autoPlay
        disablePictureInPicture
        loop
        muted
        playsInline
        preload="auto"
        className={`pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-out ${isVideoReady ? "opacity-100" : "opacity-0"}`}
      >
        <source src={videoSource} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/60" />
    </div>
  );
}
