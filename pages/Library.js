import React, { useState } from "react";
import { Text, View, ScrollView, StyleSheet, TextInput } from "react-native";

import LibrarySurah from "../components/ui/LibrarySurah";
import { useSurahs } from "../hooks/useSurahs";

function Library() {
    const { surahs } = useSurahs();

    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (text) => {
        setSearchTerm(text);
    };

    return (
        <View style={styles.container}>
            <View style={styles.parent}>
                <ScrollView style={styles.library}>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => handleSearch(text)}
                        value={searchTerm}
                        placeholder="Search..."
                    />
                    {surahs
                        ? surahs.map((surah, index) => {
                              const searchTermLower = searchTerm.toLowerCase();
                              const surahNameLower =
                                  surah.name_simple.toLowerCase();

                              if (
                                  surahNameLower.includes(searchTermLower) ||
                                  surah.translated_name.name.includes(
                                      searchTerm
                                  ) ||
                                  surah.name_arabic.includes(searchTerm) ||
                                  surah.name_simple.includes(searchTerm)
                              ) {
                                  return (
                                      <LibrarySurah
                                          key={index}
                                          index={index}
                                          surah={surah}
                                      />
                                  );
                              }
                          })
                        : ""}
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
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color: "#000",
        backgroundColor: "#fff",
        borderRadius: 20,
    },
});

export default Library;
