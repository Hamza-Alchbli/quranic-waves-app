import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";

import { Nav } from "./components/Nav";
import Navigation from "./components/Navigation";

import useLoadingStatus from "./hooks/useLoadingStatus";
import { AudioProvider } from "./context/AudioContext";

export default function App() {
    const { error, loading, setLoading, setError } = useLoadingStatus();
    return (
        <>
            {loading ? (
                <ActivityIndicator />
            ) : error ? (
                <Text>{error}</Text>
            ) : (
                <AudioProvider>
                    <NavigationContainer>
                        <View style={styles.container}>
                            <Nav />
                            <Navigation />
                        </View>
                    </NavigationContainer>
                </AudioProvider>
            )}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        height: "100%",
        color: "#fff",
    },
    text: {
        color: "#fff",
    },
});
