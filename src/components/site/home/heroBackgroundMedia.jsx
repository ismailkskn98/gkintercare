"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const videoSource = "/videos/hero-video-last.mp4";
const fallbackImage = "/videos/hero-video-poster.jpg";

export default function HeroBackgroundMedia() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [requiresAutoplayFallback, setRequiresAutoplayFallback] = useState(false);
  const [hasPlaybackFailure, setHasPlaybackFailure] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return undefined;
    }

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");

    const isAppleMobile = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    setRequiresAutoplayFallback(isAppleMobile);

    function handlePlaybackFailure() {
      setHasPlaybackFailure(true);
    }

    function tryToPlay() {
      const playAttempt = video.play();

      if (playAttempt) {
        playAttempt.catch(handlePlaybackFailure);
      }
    }

    tryToPlay();
    video.addEventListener("error", handlePlaybackFailure);

    return () => {
      video.removeEventListener("error", handlePlaybackFailure);
    };
  }, []);

  const shouldShowFallback = hasPlaybackFailure || (requiresAutoplayFallback && !isPlaying);

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
        poster={fallbackImage}
        preload="auto"
        className={`pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${shouldShowFallback ? "opacity-0" : "opacity-100"}`}
        onError={() => setHasPlaybackFailure(true)}
        onPlaying={() => {
          setIsPlaying(true);
          setHasPlaybackFailure(false);
        }}
      >
        <source src={videoSource} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/60" />
    </div>
  );
}
