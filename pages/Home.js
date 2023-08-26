import React from "react";
import { Text, View, StyleSheet } from "react-native";
import PlayingSurah from "../components/ui/PlayingSurah";
import AudioControls from "../components/AudioControls";
import { useSurahs } from "../hooks/useSurahs";

function Home() {
    return (
        <View style={styles.container}>
            <PlayingSurah />
            <AudioControls />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 40,
    },
});

export default Home;
