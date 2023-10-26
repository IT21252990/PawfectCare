import React, { useState, useEffect   } from "react";
import { StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { getAuth, onAuthStateChanged , signOut , deleteUser} from "firebase/auth";
import { doc, setDoc,getDoc,deleteDoc , collection } from 'firebase/firestore';
import { FIRESTORE_DB } from "../../../firebaseConfig";
import { useNavigation} from '@react-navigation/native';

import Colors from "../../../assets/colors/colors";


const PetSitterProfile = () => {

  const [user, setUser] = useState(null);
  const navigation = useNavigation();

  

  const [name, setName] = useState("");
  const [website, setWebsite] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [experience, setExperience] = useState("");
  const [servicesProvided, setServicesProvided] = useState("");

  
  

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setEmail(user.email); // Set the email state with the user's email
         // Add this line to log the user's email
        fetchUserData(user.uid);
      } else {
        navigation.navigate('LoginPage');
      }
    });
  }, []);

  const fetchUserData = async (userId) => {
    const userDocRef = doc(FIRESTORE_DB, "pet_sitter_profile", userId);
    const docSnapshot = await getDoc(userDocRef); // Use getDoc to fetch the data
    if (docSnapshot.exists()) {
      const userData = docSnapshot.data();
      console.log("Retrieved user data:", userData);
  
      const name = userData.name || "";
      const website = userData.website || "";
      const contactNumber = userData.contactNumber || "";
      const address = userData.address || "";
      const description = userData.description || "";
      const experience = userData.experience || "";
      const servicesProvided = userData.servicesProvided || "";
  
      
  
      // Now you can set these values in your state as needed.
      setName(name);
      setWebsite(website);
      setContactNumber(contactNumber);
      setAddress(address);
      setDescription(description);
      setExperience(experience);
      setServicesProvided(servicesProvided);
    }
  };
  
  
  


  const saveChanges = async () => {
    if (!user) {
      navigation.navigate('LoginPage');
      return;
    }

    try {
      
      

      // Save additional profile data to Firestore
      const userDocRef = doc(FIRESTORE_DB, "pet_sitter_profile", user.uid);
      await setDoc(userDocRef, {
        name,
        email,
        website,
        contactNumber,
        address,
        description,
        experience,
        servicesProvided,
        role: "Pet Sitter",
      });

      console.log("Profile data saved successfully.");
      navigation.navigate('SitterBottomNavigation');
      
    } catch (error) {
      console.error("Error saving profile data: ", error);
      
    }
  };

  

  const logoutHandler = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);

      

      // Navigate to the login screen
      navigation.navigate('LoginPage');
    } catch (error) {
      console.error("Error logging out: ", error);

      
    }
  };

  const deleteFirestoreData = async (userId) => {
    const userDocRef = doc(FIRESTORE_DB, "pet_sitter_profile", userId);
    try {
      await deleteDoc(userDocRef);
      console.log("Firestore data deleted successfully.");
    } catch (error) {
      console.error("Error deleting Firestore data: ", error);
    }
  };

  const deleteAccountHandler = async () => {
    const auth = getAuth();
    const user = auth.currentUser;
  
    if (user) {
      try {
        // Delete data from the 'users' collection
        const usersCollectionRef = collection(FIRESTORE_DB, "users");
const userDocRef = doc(usersCollectionRef, user.uid);
await deleteDoc(userDocRef);
  
        // Delete Firestore data
        deleteFirestoreData(user.uid);
  
        // Delete the user's account
        await deleteUser(user);
  
        
        navigation.navigate('LoginPage');
      } catch (error) {
        console.error("Error deleting account: ", error);
        
      }
    } else {
      // Handle the case where there is no authenticated user
      console.error("No authenticated user found.");
      // You can show a message to the user or take appropriate action.
    }
  };
  
  


  return (
    <ImageBackground
      source={require("../../../assets/images/mainbg.jpeg")}
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
            source={require("../../../assets/images/loginpic.png")}
            style={styles.avatarImage}
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Upload Photo</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.backgroundBox}>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
              style={styles.input}
              placeholder="Enter your name"
              value={name}
              onChangeText={text => setName(text)}
            />
        <Text style={styles.label}>WebSite:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your URL "
          value={website}
          onChangeText={text => setWebsite(text)}
          
        />
        <Text style={styles.label}>Contact Number:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your contact number"
          value={contactNumber}
          onChangeText={text => setContactNumber(text)}
          
        />
        <Text style={styles.label}>Email:</Text>
        <TextInput
  style={styles.input}
  placeholder="Enter your email"
  value={email} // Use the email state variable here
  
/>
        <Text style={styles.label}>Address:</Text>
        <TextInput
  style={styles.inputAddress}
  placeholder="Enter your address"
  value={address}
  onChangeText={text => setAddress(text)}
  multiline={true}
  numberOfLines={1}
  textAlignVertical="top"
/>
        <Text style={styles.label}>Description about Pet Sitter:</Text>
        <TextInput
          style={styles.inputDescription}
          placeholder="Enter Description About you"
          value={description}
          onChangeText={text => setDescription(text)}
          multiline={true}
  numberOfLines={1}
  textAlignVertical="top"
        />
        <Text style={styles.label}>Experience:</Text>
        <TextInput
          style={styles.inputExperience}
          placeholder="your experience"
          value={experience}
          onChangeText={text => setExperience(text)}
          multiline={true}
  numberOfLines={1}
  textAlignVertical="top"
        />
        <Text style={styles.label}>Providing Services:</Text>
        <TextInput
          style={styles.inputProviding}
          placeholder="Enter Providing Services  & Prices"
          value={servicesProvided}
          onChangeText={text => setServicesProvided(text)}
          multiline={true}
  numberOfLines={1}
  textAlignVertical="top"
        />
      </View>
      
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.saveButton} onPress={saveChanges}>
              <Text style={styles.buttonText}>Save Changes</Text>
            </TouchableOpacity>
        <View style={styles.horizontalButtonContainer}>
          <TouchableOpacity style={styles.updatePasswordButton}>
            <Text style={styles.buttonText}>Update Password</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteAccountButton} onPress={deleteAccountHandler } >
              <Text style={styles.buttonText}>Delete Account</Text>
            </TouchableOpacity>
          
        </View>
        <TouchableOpacity style={styles.logoutButton} onPress={logoutHandler}>
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>
      </View>
      </View>
      </ScrollView>

    </ImageBackground>
  );
};

export default PetSitterProfile;


const styles = StyleSheet.create({
  container: {
      flex: 1,
    },
    header: {
      width: 395,
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
       // Changed from a string to a numeric value
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
      textAlign: "center",
    },
    button: {
      backgroundColor: "#FFD2A6",
      padding: 5,
      borderRadius: 10,
      marginLeft: 10,
    },
    buttonText: {
      color: "white",
      fontSize: 16,
      fontStyle: "normal",
      fontWeight: "400",
      textAlign: "center",
    },
    formContainer: {
      marginLeft:5,
      marginTop: 20,
    },
    label: {
      width: "auto",
      height: 30,
      marginLeft: 15,
      color: Colors.scondory,
      fontSize: 18,
      fontWeight: "bold",
      marginTop:5
    },
    input: {
      width: 300,
      height: 45,
      marginLeft: 10,
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
      textAlign: "center",
    },
    logoutButtonText: {
      color: "white",
      fontSize: 16,
      fontStyle: "normal",
      fontWeight: "400",
      textAlign: "center",
    },
   logoutButton: {
      width: 99,
      height: 44,
      marginTop: 20,
      marginBottom:50,
      flexShrink: 0,
      borderRadius: 20,
      backgroundColor: "#FF827A",
      justifyContent: "center",
      alignItems: "center",
      shadowColor: "rgba(0, 0, 0, 0.25)",
      shadowOffset: { width: 0, height: 10 },
      shadowRadius: 15,
      marginLeft:120,
  },
  backgroundBox: {
      marginLeft:18,
      width: 360,
      borderRadius: 30,
      backgroundColor: "rgba(255, 255, 255, 0.45)",
      shadowColor: "rgba(0, 0, 0, 0.25)",
      shadowOffset: { width: 0, height: 10 },
      shadowRadius: 15,
      padding: 15,
      margin: 10,
      marginBottom:40,
    },
    inputAddress: {
      width: 300,
      height: 90,
      marginLeft: 10,
      borderRadius: 20,
      backgroundColor: "#FFD2A6",
      marginBottom: 10,
      padding :15 ,
    },
    inputDescription: {
      width: 300,
      height: 90,
      marginLeft: 10,
      borderRadius: 20,
      backgroundColor: "#FFD2A6",
      marginBottom: 10,
      padding :15 ,
    },
    inputExperience: {
      width: 300,
      height: 90,
      marginLeft: 10,
      borderRadius: 20,
      backgroundColor: "#FFD2A6",
      marginBottom: 10,
      padding :15 ,
    },
    inputProviding: {
      width: 300,
      height: 90,
      marginLeft: 10,
      borderRadius: 20,
      backgroundColor: "#FFD2A6",
      marginBottom: 10,
      padding :15 ,
    },
    


});