import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faQuran } from "@fortawesome/free-solid-svg-icons";
export const Nav = () => (
    <View style={styles.nav}>
        <Text style={styles.logo}>Quranic Waves</Text>
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
        // backgroundColor: "#000",
    },
    logo: {
        color: "white",
        fontSize: 25,
        fontWeight: "bold",
        marginLeft: 20,
        paddingVertical: 20,
    },
});
