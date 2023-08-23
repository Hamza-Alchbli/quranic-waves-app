import React from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";

import LibrarySurah from "../components/ui/LibrarySurah";
import { useSurahs } from "../hooks/useSurahs";

function Library() {
    const { surahs } = useSurahs();

    return (
        <View style={styles.container}>
            <View style={styles.parent}>
                <ScrollView style={styles.library}>
                    {surahs ? (
                        surahs.map((surah, index) => {
                            return <LibrarySurah key={index} surah={surah} />;
                        })
                    ) : (
                        <Text>Loading...</Text>
                    )}
                </ScrollView>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    parent: {
        width: "100%",
        height: "100%",
    },
    library: {
        backgroundColor: "black",
        width: "100%",
        paddingHorizontal: 20,
        flexDirection: "column",
        gap: 20,
    },
    child: {
        marginVertical: 5,
    },
});

export default Library;
