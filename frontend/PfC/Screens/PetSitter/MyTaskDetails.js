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

  avatarContainer: {
    width: 110,
    height: 110,
    marginTop: 20,
    marginLeft: 150,
    borderRadius: 110,
    backgroundColor: "lightgray",
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 15,
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  avatarImage: {
    width: 110,
    height: 110,
    borderRadius: 110,
  },
  badgeContainer: {
    width: 102,
    height: 27.118,
    borderRadius: 10,
    backgroundColor: "linear-gradient(180deg, #FFD2A6 96.35%, rgba(255, 126, 0, 0.00) 100%)",
    justifyContent: "center",
    alignItems: "center",
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
  petInfoContainer: {
    marginTop: 20,
  },
  petInfoLabel: {
    fontSize: 16,
    fontWeight: "bold",
  },
  petInfoData: {
    fontSize: 16,
    marginLeft: 5,
    fontWeight: "normal",
  },
  personalityLabel: {
    fontSize: 16,
    fontWeight: "bold",
  },
  personalityData: {
    fontSize: 16,
    marginLeft: 5,
    fontWeight: "normal",
  },
  button: {
    borderRadius: 20,
    marginLeft:130,
    padding: 15,
    width:150,
    backgroundColor: "#FFD2A6",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 15,
    marginBottom: 10,
  },
  buttonText: {
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
  },
  horizontalButton2:{
    borderRadius: 10,
    width:150,
    marginLeft:30,
    marginTop:50,
    padding: 15,
    backgroundColor: "#C57AFF",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 15,
    marginBottom: 50,
    marginRight: 10,
  },

  // Additional style for the horizontal buttons
  horizontalButton: {
    borderRadius: 10,
    width:150,
    marginLeft:30,
    marginTop:50,
    
    padding: 15,
    backgroundColor: "#FFF6ED",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 15,
    marginBottom: 50,
    marginRight: 10,
  },
  
});

const PetSitterProfile = () => {
  // Define fake pet details
  const fakePetDetails = {
    name: "Charlie",
    owner: "Jorn",
    breed: "Domestic Shorthair",
    age: "2 years old",
    color: "Gray with white paws and chest",
    weight: "10 lbs",
    personality:
      "Playful: Charlie is an energetic and playful cat. He loves interactive toys and enjoys play sessions. Cuddly: He is affectionate and enjoys cuddling, especially during the evenings. Curious: Charlie is curious about his surroundings and often explores every nook and corner of the house. Likes: He likes chasing feather wands, watching birds from the window, and lounging in cozy spots. Dislikes: Loud noises and being confined to a small space.",
    feeding: "Charlie is fed twice a day, in the morning and evening. He prefers wet food but enjoys occasional treats of dry kibbles.",
    specialInstructions:
      "Please ensure that windows and balcony doors are securely closed during the cat sitting period. If Charlie shows signs of restlessness or unusual behavior, providing interactive playtime can help.",
    emergencyContact: "Emergency Contact: 0777777777 / Jorn@gmail.com",
  };

  return (
    <ImageBackground
      source={require("../../assets/images/mainbg.jpeg")}
      style={styles.container}
      imageStyle={styles.background}
    >
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>APPOINTMENTS</Text>
        </View>

        <View style={styles.avatarContainer}>
          <Image source={require("../../assets/images/loginpic.png")} style={styles.avatarImage} />
        </View>

        <View style={styles.backgroundBox}>
          <View style={styles.petInfoContainer}>
            
            <Text style={{ ...styles.petInfoData, textAlign: 'center', fontWeight: 'bold' ,  fontSize: 30 }} >{fakePetDetails.name}</Text>
            <Text style={styles.petInfoLabel}>Owner:</Text>
            <Text style={styles.petInfoData}>{fakePetDetails.owner}</Text>
            <Text style={styles.petInfoLabel}>Breed:</Text>
            <Text style={styles.petInfoData}>{fakePetDetails.breed}</Text>
            <Text style={styles.petInfoLabel}>Age:</Text>
            <Text style={styles.petInfoData}>{fakePetDetails.age}</Text>
            <Text style={styles.petInfoLabel}>Color:</Text>
            <Text style={styles.petInfoData}>{fakePetDetails.color}</Text>
            <Text style={styles.petInfoLabel}>Weight:</Text>
            <Text style={styles.petInfoData}>{fakePetDetails.weight}</Text>
            <Text style={styles.petInfoLabel}>Personality:</Text>
            <Text style={styles.petInfoData}>
              <Text style={styles.personalityLabel}>Playful:</Text> {fakePetDetails.personality.split("Playful: ")[1]}
            </Text>
            <Text style={styles.petInfoData}>
              <Text style={styles.personalityLabel}>Cuddly:</Text> {fakePetDetails.personality.split("Cuddly: ")[1]}
            </Text>
            <Text style={styles.petInfoData}>
              <Text style={styles.personalityLabel}>Curious:</Text> {fakePetDetails.personality.split("Curious: ")[1]}
            </Text>
            <Text style={styles.petInfoData}>
              <Text style={styles.personalityLabel}>Likes:</Text> {fakePetDetails.personality.split("Likes: ")[1]}
            </Text>
            <Text style={styles.petInfoData}>
              <Text style={styles.personalityLabel}>Dislikes:</Text> {fakePetDetails.personality.split("Dislikes: ")[1]}
            </Text>
            <Text style={styles.petInfoLabel}>Feeding:</Text>
            <Text style={styles.petInfoData}>{fakePetDetails.feeding}</Text>
            <Text style={styles.petInfoLabel}>Special Instructions:</Text>
            <Text style={styles.petInfoData}>{fakePetDetails.specialInstructions}</Text>
            <Text style={styles.petInfoLabel}>Emergency Contact:</Text>
            <Text style={styles.petInfoData}>{fakePetDetails.emergencyContact}</Text>

            </View>
</View>
            <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Message</Text>
          </TouchableOpacity>

          {/* Horizontal Buttons */}
          <View style={{ flexDirection: "row" }}>
            {/* Cancel Button */}
            <TouchableOpacity style={styles.horizontalButton}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>

            {/* Pet Profile Button */}
            <TouchableOpacity style={styles.horizontalButton2}>
              <Text style={styles.buttonText}>Complete</Text>
            </TouchableOpacity>
          
          
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default PetSitterProfile;
