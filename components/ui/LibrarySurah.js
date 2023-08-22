import { View, Text, StyleSheet } from "react-native";

const LibrarySurah = ({ index, surah }) => {
    return (
        <View style={styles.container}>
            <View style={styles.child}>
                <Text style={styles.h3}>{surah.name_arabic}</Text>
                <Text style={styles.text}>
                    {surah.name_simple} || {surah.translated_name.name}
                </Text>
                <Text style={styles.text}>
                    Page: {surah.pages[0]} || Verses: {surah.verses_count}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginVertical: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0,
        shadowRadius: 3.84,
        elevation: 5,
    },
    child: {
        width: "100%",
        color: "#fff",
    },
    h3: {
        fontSize: 20,
        color: "#fff",
    },
    text: {
        fontSize: 15,
        color: "#fff",
    },
});
export default LibrarySurah;
