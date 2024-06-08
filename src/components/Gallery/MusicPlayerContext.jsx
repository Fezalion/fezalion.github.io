import React, { createContext, useContext, useState } from "react";

const MusicPlayerContext = createContext();

export const MusicPlayerProvider = ({ children }) => {
  const [currentPlaying, setCurrentPlaying] = useState(null);

  return (
    <MusicPlayerContext.Provider value={{ currentPlaying, setCurrentPlaying }}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export const useMusicPlayer = () => useContext(MusicPlayerContext);
