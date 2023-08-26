import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
} from "react-native";
import Slider from "@react-native-community/slider";
import { Audio } from "expo-av";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
    faPlay,
    faPause,
    faAngleRight,
    faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";

import { useAudioContext } from "../context/AudioContext";
import { useSurahs } from "../hooks/useSurahs";
import useLoadingStatus from "../hooks/useLoadingStatus";

const dimensions = Dimensions.get("window");
const fullWidth = dimensions.width - 20;

const AudioControls = () => {
    const { setError, setLoading } = useLoadingStatus();

    const { currentSurahAudio, currentSurah } = useSurahs();


    const [sound, setSound] = useState();
    const { isPlaying, setIsPlaying } = useAudioContext();
    const [positionMillis, setPositionMillis] = useState(0);
    const [durationMillis, setDurationMillis] = useState(0);

    const formatTime = (millis) => {
        const minutes = Math.floor(millis / 60000);
        const seconds = ((millis % 60000) / 1000).toFixed(0).padStart(2, "0");
        return `${minutes}:${seconds}`;
    };

    return (
        <View style={styles.container}>
            <View style={styles.trackBar}>
                <Text style={{ color: "#fff" }}>
                    {/* {formatTime(positionMillis)} */}
                    sss
                </Text>
                <Slider
                    style={{ width: fullWidth - 100 }}
                    value={positionMillis}
                    maximumValue={durationMillis}
                    minimumTrackTintColor="#fff"
                    thumbTintColor="#fff"
                    // onValueChange={(value) => {
                    //     if (sound) {
                    //         sound.setPositionAsync(value);
                    //         setPositionMillis(value);
                    //     }
                    // }}
                />
                <Text style={{ color: "#fff" }}>
                    {/* {formatTime(durationMillis)} */}

                    sss
                </Text>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity onPress={() => {}}>
                    <FontAwesomeIcon
                        icon={faAngleLeft}
                        size={30}
                        color="#fff"
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}}>
                    {isPlaying ? (
                        <FontAwesomeIcon
                            icon={faPause}
                            size={30}
                            color="#fff"
                        />
                    ) : (
                        <FontAwesomeIcon icon={faPlay} size={30} color="#fff" />
                    )}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}}>
                    <FontAwesomeIcon
                        icon={faAngleRight}
                        size={30}
                        color="#fff"
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
        gap: 15,
    },
    trackBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 60,
        width: fullWidth - 100,
    },
});
export default AudioControls;
