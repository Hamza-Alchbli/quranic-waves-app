import { useEffect, useState } from "react";
import { useAudioContext } from "../context/AudioContext"; // Import the useAudioContext hook
import useLoadingStatus from "./useLoadingStatus";

export const useSurahs = () => {
    const { reciter, currentIndex } = useAudioContext(); // Access the context values
    
    const {setError, setLoading} = useLoadingStatus();

    const [surahs, setSurahs] = useState(null);
    const [lang, setLang] = useState("en");
    const [currentSurah, setCurrentSurah] = useState();
    const [currentSurahAudio, setCurrentSurahAudio] = useState(1);

    useEffect(() => {
        const fetchSurahs = async () => {
            try {
                const response = await fetch(
                    `https://api.quran.com/api/v4/chapters?language=${lang}`
                );
                const clonedResponse = response.clone();
                const data = await clonedResponse.json();
                const surahData = data.chapters;
                setSurahs(surahData);
                setCurrentSurah(
                    currentIndex === 1
                        ? surahData[0]
                        : surahData[currentIndex - 1]
                );
                setCurrentSurahAudio(
                    `https://download.quranicaudio.com/qdc/${reciter}/murattal/${currentIndex}.mp3`
                );
                setLoading(false);
            } catch (e) {
                console.log(e);
                setError("Failed to fetch surahs. Please try again later.");
            }
        };
        fetchSurahs();
    }, [setLoading, setError, reciter, lang, currentIndex]);

    return { surahs, currentSurah, currentSurahAudio, setLang };
};
