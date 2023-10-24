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
import Toast from "react-native-toast-message";
import Colors from "../../../assets/colors/colors";

const AddNewPet = () => {
  const [user, setUser] = useState(null);
  const navigation = useNavigation();

  const [accountHolderName, setAccountHolderName] = useState("");
  const [centerName, setPetName] = useState("");
  const [contactPersonName, setContactPersonName] = useState("");
  const [webSiteUrl, setWebSiteUrl] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [centerEmail, setCenterEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");
  const [experience, setExperience] = useState("");
  const [servicesProvided, setServicesProvided] = useState("");

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setEmail(user.email); 
        setAccountHolderName(user.username);// Set the email state with the user's email
        fetchUserData(user.uid);
      } else {
        navigation.navigate("LoginPage");
      }
    });

    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;
        const querySnapshot = await getDocs(collection(FIRESTORE_DB, "users"));
        querySnapshot.forEach((doc) => {
          const userAccountData = doc.data();
          if (userAccountData.uid === uid) {
            setAccountHolderName(userAccountData.username);
          }
        });
      } else {
        // User is signed out
        navigation.navigate("LoginPage");
      }
    });
  }, []);



  // const fetchUserData = async (userId) => {
  //   const userDocRef = doc(FIRESTORE_DB, "care_Center_Profiles", userId);
  //   const docSnapshot = await getDoc(userDocRef); // Use getDoc to fetch the data
  //   if (docSnapshot.exists()) {
  //     const userData = docSnapshot.data();
  //     setAccountHolderName(userData.accountHolderName);
  //     setCenterName(userData.centerName || "");
  //     setContactPersonName(userData.contactPersonName || "");
  //     setWebSiteUrl(userData.website || "");
  //     setContactNumber(userData.contactNumber || "");
  //     setEmail(userData.email);
  //     setCenterEmail(userData.centerEmail || "");
  //     setAddress(userData.address || "");
  //     setCity(userData.city || "");
  //     setDescription(userData.description || "");
  //     setExperience(userData.experience || "");
  //     setServicesProvided(userData.servicesProvided || "");
  //   }
  // };



  const saveChanges = async () => {
    if (!user) {
      navigation.navigate("LoginPage");
      return;
    }

    try {
      // Save additional profile data to Firestore
      const userDocRef = doc(FIRESTORE_DB, "care_Center_Profiles", user.uid);
      await setDoc(userDocRef, {
        uid:user.uid,
        accountHolderName,
        centerName,
        contactPersonName,
        webSiteUrl,
        contactNumber,
        email,
        centerEmail,
        address,
        city,
        description,
        experience,
        servicesProvided,
        role: "PetCareCenter",
      });

      // Data saved successfully
      console.log("Profile data saved successfully.");
      Toast.show({
        type: "success",
        position: "bottom",
        text1: "Success",
        text2: "Profile data saved successfully.",
        visibilityTime: 3000, // 3 seconds
        autoHide: true,
      });
    } catch (error) {
      console.error("Error saving profile data: ", error);
      Toast.show({
        type: "error",
        position: "bottom",
        text1: "Error",
        text2:
          "There was an error while saving your profile data. Please try again.",
        visibilityTime: 3000, // 3 seconds
        autoHide: true,
      });
    }
  };

  const deleteFirestoreData = async (userId) => {
    const userDocRef = doc(FIRESTORE_DB, "care_Center_Profiles", userId);
    try {
      await deleteDoc(userDocRef);
      console.log("Firestore data deleted successfully.");
    } catch (error) {
      console.error("Error deleting Firestore data: ", error);
    }
  };

  const deletePetHandler = async () => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      try {
        await deleteUser(user);
        // Delete Firestore data
        deleteFirestoreData(user.uid);
        // Display a success message and navigate to the login screen
        Toast.show({
          type: "success",
          position: "bottom",
          text1: "Account Deleted",
          text2: "Your account has been successfully deleted.",
          visibilityTime: 3000,
          autoHide: true,
        });
        navigation.navigate("LoginPage");
      } catch (error) {
        console.error("Error deleting account: ", error);
        // Display an error message
        Toast.show({
          type: "error",
          position: "bottom",
          text1: "Error",
          text2:
            "There was an error while deleting your account. Please try again.",
          visibilityTime: 3000,
          autoHide: true,
        });
      }
    } else {
      console.error("No authenticated user found.");
    }
  };

  return (
    <ImageBackground
      source={require("../../../assets/images/mainbg.jpeg")}
      style={styles.container}
      imageStyle={styles.background}
    >
      <View style={styles.header}>
        <Text style={styles.headerText}>Add New Pet</Text>
      </View>
      <ScrollView>
        <View style={styles.contentContainer}>
          <View style={styles.avatarContainer}>
            <Image
              source={require("../../../assets/images/loginpic.png")}
              style={styles.avatarImage}
            />
          </View>
          <View>
            <TouchableOpacity style={styles.buttonimageupload}>
              <Text style={styles.buttonTextuploadImage}>Upload Photo</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.backgroundBox}>
          <View style={styles.formContainer}>
          <Text style={styles.label}>Owner Name :</Text>
            <View style={styles.shadowBox}>
              <TextInput
                style={styles.input}
                value={accountHolderName}
                editable={false}
              />
            </View>

            <Text style={styles.label}>Contact Number :</Text>
            <View style={styles.shadowBox}>
              <TextInput
                style={styles.input}
                placeholder="Enter Contact Number "
                keyboardType="phone-pad"
                value={contactNumber}
              onChangeText={text => setContactNumber(text)}
              />
            </View>

            <Text style={styles.label}>Email :</Text>
            <View style={styles.shadowBox}>
              <TextInput
                style={styles.input}
                keyboardType="email-address"
                value={email}
                editable={false}
              />
            </View>

            <Text style={styles.label}>City :</Text>
            <View style={styles.shadowBox}>
              <TextInput
                style={styles.input}
                keyboardType="default"
                value={email}
                editable={false}
              />
            </View>

            <Text style={styles.label}>Pet Details</Text>

            <Text style={styles.label}>Name :</Text>
            <View style={styles.shadowBox}>
              <TextInput
                style={styles.input}
                placeholder="Enter your Pet's Name"
                value={centerName}
              onChangeText={text => setPetName(text)}
              />
            </View>

            <Text style={styles.label}>Age :</Text>
            <View style={styles.shadowBox}>
              <TextInput
                style={styles.input}
                placeholder="Enter Your Pet's age"
                keyboardType="phone-pad"
                value={contactPersonName}
              onChangeText={text => setContactPersonName(text)}
              />
            </View>

            <Text style={styles.label}>Gender :</Text>
            <View style={styles.shadowBox}>
              <TextInput
                style={styles.input}
                placeholder="Enter Your Pet's Gender"
                keyboardType="default"
                value={webSiteUrl}
              onChangeText={text => setWebSiteUrl(text)}
              />
            </View>

            <Text style={styles.label}>Breed :</Text>
            <View style={styles.shadowBox}>
              <TextInput
                style={styles.input}
                keyboardType="default"
                placeholder="Enter Your Pet's breed "
                value={centerEmail}
                onChangeText={text => setCenterEmail(text)}
              />
            </View>

            <Text style={styles.label}>Personality :  </Text>
            <View style={styles.shadowBoxArea}>
              <TextInput
                style={styles.inputArea}
                placeholder="Enter details about your pet's personality "
                keyboardType="default"
                multiline = {true}
                numberOfLines={5}
                textAlignVertical="top"
                value={description}
              onChangeText={text => setDescription(text)}
              />
            </View>

            <Text style={styles.label}>Allergies / Medications :  </Text>
            <View style={styles.shadowBoxArea}>
              <TextInput
                style={styles.inputArea}
                placeholder="Enter details about your pet's allergies and medications "
                keyboardType="default"
                multiline = {true}
                numberOfLines={5}
                textAlignVertical="top"
                value={experience}
              onChangeText={text => setExperience(text)}
              />
            </View>

          </View>

          <View style={styles.buttonContainer}>
            <View>
               <TouchableOpacity style={styles.saveButton} onPress={saveChanges}>
              <Text style={styles.buttonTextsave}>Save Changes</Text>
            </TouchableOpacity>
            </View>
           
            <View style={styles.horizontalButtonContainer}>
              <View>
                <TouchableOpacity
                style={styles.deleteAccountButton}
                onPress={deletePetHandler}
              >
                <Text style={styles.buttonText}>Delete Pet</Text>
              </TouchableOpacity>
              </View>
            </View>
            
            
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default AddNewPet;

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
    padding: 15,
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
  updatePasswordButton: {
    width: 160, 
    marginLeft: 25,
    height: 54,
    borderRadius: 20,
    backgroundColor: Colors.Btn_Negative,
    justifyContent: "center",
    elevation:10
  },
  deleteAccountButton: {
    width: 160, 
    marginRight: 25,
    height: 54,
    borderRadius: 20,
    backgroundColor: Colors.Btn_Negative,
    justifyContent: "center",
    elevation:10
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
  logoutButton: {
    width: 100,
    height: 54,
    marginTop: 15,
    marginBottom: 50,
    borderRadius: 20,
    backgroundColor: Colors.btn_Danger,
    justifyContent: "center",
    marginLeft: 140,
    elevation:10
  },
  logoutButtonText: {
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
