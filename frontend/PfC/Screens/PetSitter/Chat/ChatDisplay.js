import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";

const ChatDisplay = () => {
  const route = useRoute();
  const { center } = route.params;

  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "#000000", margin: 20 }}>
        Chat with {center.centerName}
      </Text>
      {/* Implement your chat UI and functionality here */}
    </View>
  );
};

export default ChatDisplay;
