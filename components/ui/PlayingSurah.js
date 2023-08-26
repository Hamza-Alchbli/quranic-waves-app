import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { useSurahs } from "../../hooks/useSurahs";
import { useAudioContext } from "../../context/AudioContext";

function PlayingSurah() {
    const { currentSurah } = useSurahs();
    return (
        <View style={styles.container}>
            <Image
                source={require("../../assets/mishari_al_afasy.jpg")}
                style={styles.image}
            />
            {currentSurah ? (
                <>
                    <Text style={styles.h2}>{currentSurah.name_arabic}</Text>
                    <Text style={styles.h3}>
                        {currentSurah.translated_name.name} ||{" "}
                        {currentSurah.name_simple}
                    </Text>
                </>
            ) : (
                ""
            )}
        </View>
    );
}
const dimensions = Dimensions.get("window");
const imageHeight = Math.round((dimensions.width * 5) / 5 - 90);
const imageWidth = dimensions.width - 90;

const styles = StyleSheet.create({
    container: {
        flex: 4,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        marginBottom: 20,
        height: imageHeight,
        width: imageWidth,
        borderRadius: 5,
    },
    h2: {
        fontSize: 20,
        color: "#fff",
    },
    h3: {
        fontSize: 16,
        color: "#fff",
    },
});

export default PlayingSurah;
