import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  deleteUser,
} from "firebase/auth";
import { doc, setDoc, getDoc, deleteDoc } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { FIRESTORE_DB } from "../../../firebaseConfig";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../../assets/colors/colors";

const BookNowDetails = ({ route }) => {
    
    const { selectedItem } = route.params;

    const navigation = useNavigation();

 

    return (
        <ImageBackground
          source={require("../../../assets/images/mainbg.jpeg")}
          style={styles.container}
          imageStyle={styles.background}
        >
          <View style={styles.header}>
            <Text style={styles.headerText}>Details</Text>
          </View>
          <ScrollView>
            <View style={styles.contentContainer}>
              <View style={styles.avatarContainer}>
                <Image
                  source={require("../../../assets/images/loginpic.png")}
                  style={styles.avatarImage}
                />
              </View>
            </View>
    
            <View style={styles.backgroundBox}>
              <View style={styles.formContainer}>
    
                <Text style={styles.label}>Center Name :</Text>
                <View style={styles.shadowBox}>
                  <TextInput
                    style={styles.input}
                    value={selectedItem.centerName}
                  
                  />
                </View>
    
                <Text style={styles.label}>Contact Person Name :</Text>
                <View style={styles.shadowBox}>
                  <TextInput
                    style={styles.input}
                    value={selectedItem.contactPersonName}
                  />
                </View>
    
                <Text style={styles.label}>Web Site :</Text>
                <View style={styles.shadowBox}>
                  <TextInput
                    style={styles.input}
                    value={selectedItem.webSiteUrl}
                    editable={false}
                  />
                </View>
    
                <Text style={styles.label}>Contact Number :</Text>
                <View style={styles.shadowBox}>
                  <TextInput
                    style={styles.input}
                    value={selectedItem.contactNumber}
                    editable={false}
                  />
                </View>
    
                <Text style={styles.label}>Center Email :</Text>
                <View style={styles.shadowBox}>
                  <TextInput
                    style={styles.input}
                    value={selectedItem.centerEmail}
                    editable={false}
                  />
                </View>
    
                <Text style={styles.label}>Address : </Text>
                <View style={styles.shadowBox}>
                  <TextInput
                    style={styles.input}
                    value={selectedItem.address}
                    editable={false}
                  />
                </View>
    
                <Text style={styles.label}>City : </Text>
                <View style={styles.shadowBox}>
                  <TextInput
                    style={styles.input}
                    value={selectedItem.city}
                    editable={false}
                  />
                </View>
    
                <Text style={styles.label}>Description About Center :  </Text>
                <View style={styles.shadowBoxArea}>
                  <TextInput
                    style={styles.inputArea}
                    multiline = {true}
                    numberOfLines={5}
                    textAlignVertical="top"
                    value={selectedItem.description}
                    editable={false}
                  />
                </View>
    
                <Text style={styles.label}>Providing Services  & Prices   :</Text>
                <View style={styles.shadowBoxArea}>
                  <TextInput
                    style={styles.inputArea}
                    multiline = {true}
                    numberOfLines={5}
                    textAlignVertical="top"
                    value={selectedItem.servicesProvided}
                    editable={false}
                  />
                </View>
    
              </View>
    
              <View style={styles.buttonContainer}>
                <View>
                   <TouchableOpacity 
                    style={styles.saveButton} 
                    // onPress={BookNow}
                    >
                  <Text style={styles.buttonTextsave}>Book Now</Text>
                </TouchableOpacity>
                </View>
                
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      );
    };
    
    export default BookNowDetails;
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      header: {
        width: "100%",
        height: 100,
        marginLeft: 0,
        marginTop: 0,
        borderRadius: 40,
        backgroundColor: Colors.top_title_bar,
        alignItems: "center",
        elevation: 40,
      },
      headerText: {
        color: Colors.scondory,
        textAlign: "center",
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 55,
      },
      contentContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
      },
      avatarContainer: {
        width: 110,
        height: 110,
        borderRadius: 110,
        backgroundColor: Colors.ternary,
        justifyContent: "center",
        alignItems: "center",
        elevation: 30,
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
        backgroundColor:
          "linear-gradient(180deg, #FFD2A6 96.35%, rgba(255, 126, 0, 0.00) 100%)",
        justifyContent: "center",
        alignItems: "center",
      },
      badgeText: {
        width: 81,
        height: 21.307,
        color: "#3D3836",
    
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: "400",
        textAlign: "center",
      },
      buttonimageupload: {
        backgroundColor: Colors.ternary,
        padding: 5,
        borderRadius: 20,
        marginLeft: 10,
        elevation: 10,
      },
      buttonTextuploadImage: {
        color: Colors.scondory,
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        padding: 5,
      },
      formContainer: {
        marginLeft: 0,
        marginTop: 30,
      },
      label: {
        width: "auto",
        height: 30,
        marginLeft: 30,
        color: Colors.scondory,
        fontSize: 18,
        fontWeight: "bold",
        marginTop:5
      },
      shadowBox: {
        width: 330,
        height: 45,
        marginLeft: 30,
        borderRadius: 20,
        backgroundColor: Colors.ternary,
        marginBottom: 10,
        padding: 14,
        elevation: 6,
      },
      shadowBoxArea:{
        width: 330,
        height: 100,
        marginLeft: 30,
        borderRadius: 20,
        backgroundColor: Colors.ternary,
        marginBottom: 10,
        padding: 15,
        elevation: 6,
      },
      input: {
        flex: 1,
        fontSize: 16,
        color: Colors.scondory,
      },
      inputArea:{
        flex: 1,
        fontSize: 16,
        color: Colors.scondory,
      },
      // Add styles for the buttons
      buttonContainer: {
        flexDirection: "column",
        justifyContent: "space-between",
        marginTop: 50,
        marginBottom:20
      },
      saveButton: {
        width: "50%", // Take up full width
        marginLeft: 100,
        height: 54,
        borderRadius: 20,
        backgroundColor: Colors.Btn_Positive,
        justifyContent: "center",
        marginBottom: 20,
        elevation:10 
      },
      horizontalButtonContainer: {
        flexDirection: "row", 
        justifyContent: "space-between",
        marginTop: 15,
        marginBottom:15
      },
      buttonTextsave: {
        color: Colors.scondory,
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
      },
      buttonText: {
        color: Colors.scondory,
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
      },
      backgroundBox: {
        width: 400,
        borderRadius: 50,
        backgroundColor: Colors.transparent_bgCard,
        marginBottom: 40,
        marginTop: 30,
      },
    });
    
