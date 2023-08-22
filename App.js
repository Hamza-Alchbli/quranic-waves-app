import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";

import useLoadingStatus from "./hooks/useLoadingStatus";
import { useSurahs } from "./hooks/useSurahs";
import { Nav } from "./components/Nav";

export default function App() {
    const { error, loading, setLoading, setError } = useLoadingStatus();

    const [libraryStatus, setLibraryStatus] = useState(false);

    const [reciter, setReciter] = useState("mishari_al_afasy");
    const [currentIndex, setCurrentIndex] = useState(1);

    const [isPlaying, setIsPlaying] = useState(false);
    const [shuffle, setShuffle] = useState(false);
    const [randomSurah, setRandomSurah] = useState(null);

    const { surahs, currentSurah, currentSurahAudio, setLang } = useSurahs({
        reciter,
        currentIndex,
        setLoading,
        setError,
    });
    console.log(currentSurah);
    return (
        <>
            {loading ? (
                <ActivityIndicator />
            ) : error ? (
                <Text>{error}</Text>
            ) : (
                <View style={styles.container}>
                    <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
                </View>
            )}
        </>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    height: "100%",
    color: "#fff",
  }
});
