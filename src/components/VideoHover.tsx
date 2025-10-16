import React, { useRef, useState, useEffect } from 'react';

interface VideoHoverProps {
  imageSrc: string;
  hoverVideoSrc: string;
  leaveVideoSrc: string;
  alt?: string;
  className?: string;
}

const VideoHover: React.FC<VideoHoverProps> = ({
  imageSrc,
  hoverVideoSrc,
  leaveVideoSrc,
  alt = "Hover image",
  className = ""
}) => {
  const hoverVideoRef = useRef<HTMLVideoElement>(null);
  const leaveVideoRef = useRef<HTMLVideoElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [showLeaveVideo, setShowLeaveVideo] = useState(false);
  

  // Preload videos for smooth playback
  useEffect(() => {
    const preloadVideo = (src: string) => {
      const video = document.createElement('video');
      video.src = src;
      video.preload = 'auto';
    };
    preloadVideo(hoverVideoSrc);
    preloadVideo(leaveVideoSrc);
  }, [hoverVideoSrc, leaveVideoSrc]);

  const handleMouseEnter = async () => {
    
    setIsHovering(true);
    setShowLeaveVideo(false);

    if (hoverVideoRef.current) {
      try {
        hoverVideoRef.current.currentTime = 0;
        await hoverVideoRef.current.play();
      } catch (error) {
        console.error('Error playing hover video:', error);
      }
    }
  };

  const handleMouseLeave = async () => {
    setIsHovering(false);
    

    if (hoverVideoRef.current) {
      hoverVideoRef.current.pause();
    }

    setShowLeaveVideo(true);

    // Delay to ensure DOM updates before playing leave video
    setTimeout(() => {
      if (leaveVideoRef.current) {
        leaveVideoRef.current.currentTime = 0;
        leaveVideoRef.current.play().catch(error => {
          console.error('Error playing leave video:', error);
          setShowLeaveVideo(false);
        });
      }
    }, 50);
  };

  const handleLeaveVideoEnd = () => {
    setShowLeaveVideo(false);
  };

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
        
      {/* Base Image */}
      <img
        src={imageSrc}
        alt={alt}
        className={`w-96 scale-[1.33] object-cover absolute top-12 inset-0 transition-opacity duration-200 
          ${!isHovering && !showLeaveVideo  ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
      />

      {/* Hover Video */}
      <video
        ref={hoverVideoRef}
        className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-200 
          ${isHovering ? 'opacity-100 z-20' : 'opacity-0 z-0'}`}
        muted
        playsInline
        preload="auto"
      >
        <source src={hoverVideoSrc} type="video/webm" />
        <source src={hoverVideoSrc.replace('.webm', '.mp4')} type="video/mp4" />
      </video>

      {/* Leave Video */}
      <video
        ref={leaveVideoRef}
        className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-200 
          ${showLeaveVideo ? 'opacity-100 z-20' : 'opacity-0 z-0'}`}
        muted
        playsInline
        preload="auto"
        onEnded={handleLeaveVideoEnd}
      >
        <source src={leaveVideoSrc} type="video/mp4" />
        <source src={leaveVideoSrc.replace('.mp4', '.webm')} type="video/webm" />
      </video>
    </div>
  );
};

export default VideoHover;
