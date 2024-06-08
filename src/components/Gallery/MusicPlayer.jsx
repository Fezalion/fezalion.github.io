import React, { useState, useRef, useEffect } from "react";
import { useMusicPlayer } from "./MusicPlayerContext";

const MusicPlayer = ({ src, title }) => {
  const { currentPlaying, setCurrentPlaying } = useMusicPlayer();
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.5); // Default volume

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      setCurrentPlaying(null);
    } else {
      if (currentPlaying && currentPlaying !== audioRef.current) {
        currentPlaying.pause();
      }
      audioRef.current.play();
      setIsPlaying(true);
      setCurrentPlaying(audioRef.current);
    }
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleProgressBarChange = (e) => {
    const newTime = e.target.value;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  useEffect(() => {
    if (currentPlaying !== audioRef.current && isPlaying) {
      setIsPlaying(false);
    }
  }, [currentPlaying, isPlaying]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="music-player m-4 rounded-lg p-4 shadow-md">
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      ></audio>
      <div className="mb-2 flex items-center">
        <button
          className="mr-4 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
          onClick={handlePlayPause}
        >
          {isPlaying ? "Pause" : "Play"}
        </button>

        <div className="flex items-center">
          <span className="mr-2 text-sm">Volume</span>
          <input
            type="range"
            className="mr-2 w-full"
            value={volume}
            min="0"
            max="1"
            step="0.01"
            onChange={handleVolumeChange}
          />
        </div>

        <div className="flex w-full items-center">
          <span className="mr-2 text-sm">{formatTime(currentTime)}</span>
          <input
            type="range"
            className="w-full"
            value={currentTime}
            max={duration}
            onChange={handleProgressBarChange}
          />
          <span className="ml-2 text-sm">{formatTime(duration)}</span>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
