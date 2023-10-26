import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";


const ChatList = () => {

    
  return (
    <ImageBackground
      source={require("../../../assets/images/mainbg.jpeg")}
      style={styles.container}
      imageStyle={styles.background}
    >
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "#000000", margin: 20 }}>
        Pet Care Centers
      </Text>
      
        
    </View>
    </ImageBackground>

  );
};

export default ChatList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
 
});
