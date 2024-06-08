import React from "react";
import { domAnimation, LazyMotion, m } from "framer-motion";
import FezAnimations from "../animations";
import MusicPlayer from "./MusicPlayer";

const ImagesComponent = () => {
  return (
    <>
      <div className="container mx-auto flex w-full flex-col p-4">
        <h1 className="mb-4 text-xl font-bold">Music Player</h1>
        <MusicPlayer src="/music/faster.mp3" title="Song 1" />
        <MusicPlayer src="/music/faster1.mp3" title="Song 2" />
        <MusicPlayer src="/music/faster2.mp3" title="Song 3" />
        <MusicPlayer src="/music/faster3.mp3" title="Song 4" />
        <MusicPlayer src="/music/faster4.mp3" title="Song 5" />
      </div>
    </>
  );
};

export default ImagesComponent;
