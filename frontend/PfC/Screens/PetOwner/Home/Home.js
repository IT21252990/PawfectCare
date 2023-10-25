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
import { getDocs ,collection } from "firebase/firestore";
import { FIRESTORE_DB } from "../../../firebaseConfig";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../../assets/colors/colors";


const Home = () => {

  const [careCenters, setCareCenters] = useState([]);
  const [petSitters, setPetSitters] = useState([]);
  const navigation = useNavigation();


  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(FIRESTORE_DB, "care_Center_Profiles"));
      const centersData = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        centersData.push(data);
      });
      setCareCenters(centersData);
    };
    fetchData();

    const fetchData2 = async () => {
      const querySnapshot = await getDocs(collection(FIRESTORE_DB, "pet_sitter_profile"));
      const sitterData = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        sitterData.push(data);
      });
      setPetSitters(sitterData);
    };
    fetchData2();
  }, []);

  const bookHandler = (selectedItem) => {
    navigation.navigate("BookNowDetails", { selectedItem })
  }

  const bookSitterHandler = (selectedItem) => {
    // navigation.navigate("BookSitterDetails", { selectedItem })
  }

  return (

    <ImageBackground
      source={require("../../../assets/images/mainbg.jpeg")}
      style={styles.container}
      imageStyle={styles.background}
    >
      <View style={styles.header}>
        <Text style={styles.headerText}> Dashboard </Text>
      </View>

      <ScrollView>

        <View >
          <Text style={styles.title}> Search </Text>
        </View>

        <View>
          <View >
            <Text style={styles.title}> Pet care centers</Text>
          </View>

          {careCenters.map((center, index) => (
            <View key={index} style={styles.backgroundBox}>
              <Text style={styles.centerNameText}>{center.centerName}</Text>
              <Text style={styles.cityText}>{center.city}</Text>

              <View>
              <TouchableOpacity
              style={styles.bookButton}
              onPress={() => bookHandler(center)}
            >
              <Text style={styles.bookButtonText}>See More</Text>
            </TouchableOpacity>
            </View>

            </View>
          ))}

        </View>

        <View>
          <View >
            <Text style={styles.title}> Pet Sitters</Text>
          </View>

          {petSitters.map((sitter, index) => (
            <View key={index} style={styles.backgroundBox}>
              <Text style={styles.centerNameText}>{sitter.name}</Text>
              <Text style={styles.cityText}>{sitter.address}</Text>

              <View>
              <TouchableOpacity
              style={styles.bookButton}
              onPress={() => bookSitterHandler(sitter)}
            >
              <Text style={styles.bookButtonText}>See More</Text>
            </TouchableOpacity>
            </View>

            </View>
          ))}

        </View>

      </ScrollView>
    </ImageBackground>
  );

};

export default Home;

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
  title:{
      color: Colors.scondory,
      textAlign: "center",
      fontSize: 24,
      fontWeight: "bold",
      marginTop: 20,
   
  },
  careCenterBox: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  backgroundBox: {
    width: 360,
    height: 100,
    borderRadius: 40,
    backgroundColor: Colors.transparent_bgCard,
    margin:10,
    alignSelf: 'center',
  },
  centerNameText: {
    color: Colors.scondory,
    fontWeight: "bold",
    fontSize: 24,
    fontWeight: "400",
    position: "relative",
    marginTop: 8,
    marginLeft:50
    
  },
  cityText:{
    color: "#3D3836",
    fontSize: 18,
    fontWeight: "400",
    position: "relative",
    marginTop: 13,
    marginLeft: 70
  },

  bookButton: {
    width: "40%", // Take up full width
    marginLeft: 180,
    height: 54,
    borderRadius: 20,
    backgroundColor:Colors.ternary,
    justifyContent: "center",
    marginTop: -40,
    
  },
  bookButtonText: {
    color: Colors.scondory,
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
})