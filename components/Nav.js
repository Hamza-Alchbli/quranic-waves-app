import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faQuran } from "@fortawesome/free-solid-svg-icons";
export const Nav = ({ libraryStatus, setLibraryStatus }) => (
    <View style={styles.nav}>
        <Text style={styles.logo}>Quranic Waves</Text>
        <TouchableOpacity
            style={styles.button}
            onPress={() => setLibraryStatus(!libraryStatus)}
        >
            <Text style={styles.button.text}>Library</Text>
            <FontAwesomeIcon icon={faQuran} />
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    nav: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 50,
        marginTop: "1rem",
        marginBottom: "1rem",
        // backgroundColor: "red",
        width: "100%",
    },
    logo: {
        color: "white",
        fontSize: 25,
        fontWeight: "bold",
        marginLeft: 20,
        paddingVertical: 20,
    },
    button: {
        backgroundColor: "white",
        padding: 15,
        borderRadius: 5,
        marginRight: 20,
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        text: {
            color: "black",
            fontSize: 15,
        },
    },
});
