import React from "react";
import { StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity, ScrollView } from "react-native";

import { useNavigation } from '@react-navigation/native';


const Apointmentdetail = ({ route }) => {
  
  const { appointment } = route.params;

  const navigation = useNavigation();

  const acceptAppointment = route.params.acceptAppointment;

  const handleAcceptBooking = () => {
    // Create a task object with relevant details
    const task = {
      petName: appointment.petName,
      ownerName: appointment.accountHolderName,
      acceptedDate: new Date().toDateString(),
    };

    acceptAppointment(appointment);
  
    // Navigate to the MyTasks page and pass the accepted task
    navigation.navigate("MyTasks", { acceptedTask: task });
  };

  const staticPersonality = `Playful: Charlie is an energetic and playful cat. He loves interactive toys and enjoys play sessions. Cuddly: He is affectionate and enjoys cuddling, especially during the evenings. Curious: Charlie is curious about his surroundings and often explores every nook and corner of the house. Likes: He likes chasing feather wands, watching birds from the window, and lounging in cozy spots. Dislikes: Loud noises and being confined to a small space.`;

const staticFeeding = "Charlie is fed twice a day, in the morning and evening. He prefers wet food but enjoys occasional treats of dry kibbles.";


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

        <View style={styles.avatarContainer}>
        <Image
            source={require("../../../assets/images/loginpic.png")}
            style={styles.avatarImage}
          />
        </View>

        <View style={styles.backgroundBox}>
          <View style={styles.petInfoContainer}>
            <Text style={{ ...styles.petInfoData, textAlign: 'center', fontWeight: 'bold', fontSize: 30 }}>{appointment.petName}</Text>
            <Text style={styles.petInfoLabel}>Owner:</Text>
            <Text style={styles.petInfoData}>{appointment.accountHolderName}</Text>
            <Text style={styles.petInfoLabel}>Breed:</Text>
            <Text style={styles.petInfoData}>{appointment.petBreed}</Text>
            <Text style={styles.petInfoLabel}>Age:</Text>
            <Text style={styles.petInfoData}>{appointment.petAge}</Text>
            <Text style={styles.petInfoLabel}>Gender:</Text>
            <Text style={styles.petInfoData}>{appointment.petGender}</Text>
            <Text style={styles.petInfoLabel}>Personality:</Text>
            <Text style={styles.petInfoData}>{staticPersonality}</Text> 
            <Text style={styles.petInfoLabel}>Feeding:</Text>
            <Text style={styles.petInfoData}>{staticFeeding}</Text> 
            <Text style={styles.petInfoLabel}>Emergancy Contact Number:</Text>
            <Text style={styles.petInfoData}>{appointment.contactNumber}</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleAcceptBooking}>
          <Text style={styles.buttonText}>Accept Booking</Text>
        </TouchableOpacity>

        {/* Horizontal Buttons */}
        <View style={{ flexDirection: "row" }}>
          {/* Cancel Button */}
          <TouchableOpacity style={styles.horizontalButton2}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>

          {/* Pet Profile Button */}
          <TouchableOpacity style={styles.horizontalButton}>
            <Text style={styles.buttonText}>Pet Profile</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Apointmentdetail;
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
    padding:5,
    fontWeight: "bold",
  },
  petInfoData: {
    fontSize: 16,
    paddingTop:8,
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
    marginLeft:55,
    padding: 15,
    width:300,
    backgroundColor: "#C57AFF",
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

  // Additional style for the horizontal buttons
  horizontalButton: {
    borderRadius: 10,
    width:150,
    marginLeft:30,
    marginTop:50,
    
    padding: 15,
    backgroundColor: "#FFA149",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 15,
    marginBottom: 50,
    marginRight: 10,
  },
  horizontalButton2:{
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
  }
});