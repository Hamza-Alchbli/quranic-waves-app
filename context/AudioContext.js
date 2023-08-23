import React, { createContext, useContext, useState } from "react";

const AudioContext = createContext();

export const useAudioContext = () => useContext(AudioContext);

export const AudioProvider = ({ children }) => {
    const [reciter, setReciter] = useState("mishari_al_afasy");
    const [currentIndex, setCurrentIndex] = useState(1);
    const [isPlaying, setIsPlaying] = useState(false);
    const [shuffle, setShuffle] = useState(false);
    const [randomSurah, setRandomSurah] = useState(null);

    const contextValue = {
        reciter,
        setReciter,
        currentIndex,
        setCurrentIndex,
        isPlaying,
        setIsPlaying,
        shuffle,
        setShuffle,
        randomSurah,
        setRandomSurah,
    };

    return (
        <AudioContext.Provider value={contextValue}>
            {children}
        </AudioContext.Provider>
    );
};
