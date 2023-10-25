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
  Alert,
} from "react-native";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  deleteUser,
} from "firebase/auth";
import { addDoc } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { FIRESTORE_DB } from "../../../firebaseConfig";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import Colors from "../../../assets/colors/colors";
import { useRoute } from '@react-navigation/native';

const AddNewPet = () => {
  const [user, setUser] = useState(null);
  const navigation = useNavigation();

  const [accountHolderName, setAccountHolderName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [city, setCity] = useState("");
  //pet details
  const [petName, setPetName] = useState("");
  const [petAge, setPetAge] = useState("");
  const [petGender, setpetGender] = useState("");
  const [petBreed, setpetBreed] = useState("");
  const [petPersonality, setpetPersonality] = useState("");
  const [petMed, setPetMed] = useState("");

  const route = useRoute();
  const centerId = route.params?.selectedItem?.uid;

  useEffect(() => {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setAccountHolderName(user.username);
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


  const requestBooking = async () => {
    if (!user) {
      navigation.navigate("LoginPage");
      return;
    }

    try {
      // Save additional profile data to Firestore
      const docRef = await addDoc(collection(FIRESTORE_DB, 'bookings'), {
        centerId:centerId,
        uid:user.uid,
        accountHolderName,
        contactNumber,
        city,
        petName,
        petAge,
        petGender,
        petBreed,
        petPersonality,
        petMed,
        bookingStatus: "Pending",
      });

      // Data saved successfully
      console.log("Booking request sent successfully" , docRef.id);
      Alert.alert("Booking request sent successfully")
    } catch (error) {
      console.error("Error sending booking request", error);
      Alert.alert("Error sending booking request")
    }
  };

  return (
    <ImageBackground
      source={require("../../../assets/images/mainbg.jpeg")}
      style={styles.container}
      imageStyle={styles.background}
    >
      <View style={styles.header}>
        <Text style={styles.headerText}>Request Booking</Text>
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

            <Text style={styles.label}>City :</Text>
            <View style={styles.shadowBox}>
              <TextInput
                style={styles.input}
                placeholder="Enter Your Nearest City"
                keyboardType="default"
                value={city}
                onChangeText={text => setCity(text)}
              />
            </View>

            <Text style={styles.headerPetText}>Pet Details</Text>

            <Text style={styles.label}>Name :</Text>
            <View style={styles.shadowBox}>
              <TextInput
                style={styles.input}
                placeholder="Enter your Pet's Name"
                value={petName}
              onChangeText={text => setPetName(text)}
              />
            </View>

            <Text style={styles.label}>Age :</Text>
            <View style={styles.shadowBox}>
              <TextInput
                style={styles.input}
                placeholder="Enter Your Pet's age"
                keyboardType="phone-pad"
                value={petAge}
              onChangeText={text => setPetAge(text)}
              />
            </View>

            <Text style={styles.label}>Gender :</Text>
            <View style={styles.shadowBox}>
              <TextInput
                style={styles.input}
                placeholder="Enter Your Pet's Gender"
                keyboardType="default"
                value={petGender}
              onChangeText={text => setpetGender(text)}
              />
            </View>

            <Text style={styles.label}>Breed :</Text>
            <View style={styles.shadowBox}>
              <TextInput
                style={styles.input}
                keyboardType="default"
                placeholder="Enter Your Pet's breed "
                value={petBreed}
                onChangeText={text => setpetBreed(text)}
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
                value={petPersonality}
              onChangeText={text => setpetPersonality(text)}
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
                value={petMed}
              onChangeText={text => setPetMed(text)}
              />
            </View>

          </View>

          <View style={styles.buttonContainer}>
            <View>
               <TouchableOpacity style={styles.saveButton} onPress={requestBooking}>
              <Text style={styles.buttonTextsave}>Request Booking</Text>
            </TouchableOpacity>
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
  headerPetText:{
    color: Colors.scondory,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 30,
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
    width: "65%", // Take up full width
    alignSelf: "center",
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
