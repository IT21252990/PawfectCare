import React from "react";
import { StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: 415,
    height: 63,
    marginLeft: 0,
    marginTop: 40,
    flexShrink: 0,
    borderRadius: 30,
    backgroundColor: "#C57AFF",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0px 10px 15px 0px rgba(0, 0, 0, 0.25)",
    
  },
  headerText: {
    width: 254,
    height: 26.54,
    flexShrink: 0,
    color: "#3D3836",
    textAlign: "center",
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: "bold",
    lineHeight: 26.54,
  },
  backgroundBox: {
    marginLeft: 15,
    width: 380,
    borderRadius: 30,
    backgroundColor: "rgba(255, 255, 255, 0.45)",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 15,
    padding: 15,
    margin: 10,
    marginBottom: 40,
  },
  
});

const PetSitterProfile = () => {
  

  return (
    <ImageBackground
      source={require("../../../assets/images/mainbg.jpeg")}
      style={styles.container}
      imageStyle={styles.background}
    >
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>APPOINTMENTS</Text>
        </View>

       

        <View style={styles.backgroundBox}>
         
</View>
            

        
      </ScrollView>
    </ImageBackground>
  );
};

export default PetSitterProfile;
