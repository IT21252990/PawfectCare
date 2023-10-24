import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { collection, getDocs } from "firebase/firestore";
import { FIRESTORE_DB } from "../../../firebaseConfig";
import { useNavigation } from "@react-navigation/native";

const ChatList = () => {
  const [centers, setCenters] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    // Fetch the list of pet care centers from Firestore
    const fetchCenters = async () => {
      const querySnapshot = await getDocs(collection(FIRESTORE_DB, "care_Center_Profiles"));
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
    navigation.navigate("chatDisplay", { center });
  };

  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "#000000", margin: 20 }}>
        Pet Care Centers
      </Text>
      <FlatList
        data={centers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigateToChat(item)}>
            <View style={{ padding: 10, borderBottomWidth: 1, borderColor: "#ccc" }}>
              <Text style={{ fontSize: 16 }}>{item.centerName}</Text>
              <Text style={{ fontSize: 14, color: "#777" }}>{item.city}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ChatList;
