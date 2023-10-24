import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { collection, getDocs } from "firebase/firestore";
import { FIRESTORE_DB } from "../../../firebaseConfig";
import { useNavigation } from "@react-navigation/native";

const ChatList = () => {
  const [centers, setCenters] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    // Fetch the list of pet care centers from Firestore
    const fetchCenters = async () => {
      const querySnapshot = await getDocs(collection(FIRESTORE_DB, "pet_sitter_Profiles"));
      const centerList = [];
      querySnapshot.forEach((doc) => {
        centerList.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setCenters(centerList);
    };

    fetchCenters();
  }, []);

  const navigateToChat = (center) => {
    // You can pass the selected center data to the ChatDisplay component
    navigation.navigate("ChatDisplay", { center });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pet Sitters</Text>
      <FlatList
        data={centers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigateToChat(item)}>
            <View style={styles.itemContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.location}>{item.address}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 20,
  },
  itemContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  location: {
    fontSize: 14,
    color: "#777",
  },
});

export default ChatList;
