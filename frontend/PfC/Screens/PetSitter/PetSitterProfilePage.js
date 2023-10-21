import React from "react";
import { StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity, TextInput , ScrollView  } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      header: {
        width: 360,
        height: 63,
        marginLeft:30,
        marginTop:40 ,
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
      badgeText: {
        width: 81,
        height: 21.307,
        color: "#3D3836",
        
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
        textAlign: "center",
      },
      button: {
        backgroundColor: "#FFD2A6",
        padding: 5,
        borderRadius: 10,
        marginLeft: 10,
      },
      buttonText: {
        color: "#3D3836",
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: 24,
        textAlign: "center",
      },
      formContainer: {
        marginLeft:25,
        marginTop: 20,
      },
      label: {
        width: 147,
        height: 24,
        marginLeft: 40,
        color: "#3D3836",
        fontSize: 18,
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
      },
      input: {
        width: 300,
        height: 45,
        marginLeft: 30,
        borderRadius: 20,
        backgroundColor: "#FFD2A6",
        marginBottom: 10,
        padding :15 ,
      },
      // Add styles for the buttons
      buttonContainer: {
        flexDirection: "column", // Change to column layout
        justifyContent: "space-between",
        marginTop: 20,
      },
      saveButton: {
        width: "80%", // Take up full width
        marginLeft:40,
        height: 44,
        flexShrink: 0,
        borderRadius: 20,
        backgroundColor: "#C57AFF",
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 15,
        marginBottom: 10, // Add some spacing
      },
      horizontalButtonContainer: {
        flexDirection: "row", // Horizontal layout
        justifyContent: "space-between",
        marginTop:15,
      },
      updatePasswordButton: {
        width: "40%", // Take up almost half of the width
        marginLeft:25,
        height: 44,
        flexShrink: 0,
        borderRadius: 20,
        backgroundColor: "#FFA149",
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 15,
      },
      deleteAccountButton: {
        width: "40%", // Take up almost half of the width
        marginRight:25,
        height: 44,
        flexShrink: 0,
        borderRadius: 20,
        backgroundColor: "#FFA149",
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 15,
      },
      buttonText: {
        color: "white",
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
        textAlign: "center",
      },
      logoutButton: {
        width: 99,
        height: 44,
        marginTop: 15,
        marginBottom:50,
        flexShrink: 0,
        borderRadius: 20,
        backgroundColor: "#FF827A",
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 15,
        marginLeft:140,
    },
    logoutButtonText: {
        color: "white",
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
        textAlign: "center",
    },
});

const PetSitterProfile = () => {
  return (
    <ImageBackground
      source={require("../../assets/images/mainbg.jpeg")}
      style={styles.container}
      imageStyle={styles.background}
    >
    <ScrollView>
      <View style={styles.header}>
        <Text style={styles.headerText}>SETUP YOUR PROFILE</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.avatarContainer}>
          <Image
            source={require("../../assets/images/loginpic.png")}
            style={styles.avatarImage}
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Upload Photo</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
        />
        <Text style={styles.label}>WebSite:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your website"
        />
        <Text style={styles.label}>Contact Number:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your contact number"
        />
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
        />
        <Text style={styles.label}>Address:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your address"
        />
        <Text style={styles.label}>Description about Pet Sitter:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your description"
        />
        <Text style={styles.label}>Experience:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your experience"
        />
        <Text style={styles.label}>Providing Services:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter services provided"
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.buttonText}>Save Changes</Text>
        </TouchableOpacity>
        <View style={styles.horizontalButtonContainer}>
          <TouchableOpacity style={styles.updatePasswordButton}>
            <Text style={styles.buttonText}>Update Password</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteAccountButton}>
            <Text style={styles.buttonText}>Delete Account</Text>
          </TouchableOpacity>
          
        </View>
        <TouchableOpacity style={styles.logoutButton}>
                    <Text style={styles.logoutButtonText}>Logout</Text>
                </TouchableOpacity>
      </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default PetSitterProfile;
