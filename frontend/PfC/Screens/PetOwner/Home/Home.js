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
import { getDocs, collection } from "firebase/firestore";
import { FIRESTORE_DB } from "../../../firebaseConfig";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../../assets/colors/colors";


const Home = () => {

  const [careCenters, setCareCenters] = useState([]);
  const [petSitters, setPetSitters] = useState([]);
  const navigation = useNavigation();

  const [user, setUser] = useState(null);
  const [accountHolderName, setAccountHolderName] = useState("");


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
        <View>
          <View>
            <Text style={styles.centernameText}>{accountHolderName}</Text>
          </View>

          <View style={styles.avatarContainer}>
            <Image
              source={require("../../../assets/images/loginpic.png")}
              style={styles.avatarImage}
            />

          </View>
        </View>

        {/* <View >
          <Text style={styles.title}> Search </Text>
        </View> */}

        <View>
          <View >
            <Text style={styles.title}> Pet care centers</Text>
          </View>

          <ScrollView horizontal>
            {careCenters.map((center, index) => (
              <View key={index} style={styles.backgroundBox}>
                <View style={styles.centerImageContainer}>
                  <Image
                    source={require("../../../assets/images/pet-carecenter-card.png")}
                    style={styles.centerImage}
                  />
                </View>
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
          </ScrollView>

        </View>

        <View>
          <View >
            <Text style={styles.title}> Pet Sitters</Text>
          </View>

          <ScrollView horizontal>

            {petSitters.map((sitter, index) => (
              <View key={index} style={styles.backgroundBox}>

                <View style={styles.centerImageContainer}>
                  <Image
                    source={require("../../../assets/images/pet-sitter-card.png")}
                    style={styles.centerImage}
                  />
                </View>
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
          </ScrollView>
        </View>

        <View>
          <TouchableOpacity 
           onPress={() => navigation.navigate("Bookings")}
          style={styles.saveButton}
          >
            <Text style={styles.buttonTextsave}>My Bookings</Text>
          </TouchableOpacity>
        </View>

        <View>
        <Text style={styles.title}> Owner profile </Text>
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
  title: {
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
    width: 280,
    height: 280,
    borderRadius: 40,
    backgroundColor: Colors.transparent_bgCard,
    margin: 10,
    alignSelf: 'center',
  },
  centerNameText: {
    color: Colors.scondory,
    fontWeight: "bold",
    fontSize: 24,
    fontWeight: "400",
    position: "relative",
    marginTop: 8,
    alignSelf: "center",

  },
  cityText: {
    color: "#3D3836",
    fontSize: 18,
    fontWeight: "400",
    position: "relative",
    marginTop: 13,
    alignSelf: "center",
  },

  bookButton: {
    width: "40%", // Take up full width
    alignSelf: "center",
    height: 54,
    borderRadius: 20,
    backgroundColor: "#C57AFF",
    justifyContent: "center",
    marginTop: 10

  },
  bookButtonText: {
    color: Colors.scondory,
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  centernameText: {
    fontSize: 45,
    fontWeight: "bold",
    // textAlign: "center",
    marginTop: 35,
    marginLeft: 200,
    color: Colors.scondory,
  },
  contentContainer: {
    flexDirection: "row",
    width: 350,
  },
  avatarContainer: {
    width: 110,
    height: 110,
    borderRadius: 110,
    backgroundColor: Colors.ternary,
    elevation: 30,
    marginLeft: 50,
    marginTop: -80
  },
  avatarImage: {
    width: 110,
    height: 110,
    borderRadius: 110,
  },
  centerImageContainer: {
    width: 110,
    height: 110,
    borderRadius: 110,
    backgroundColor: Colors.ternary,
    elevation: 30,
    alignSelf: 'center',
    marginTop: 10
  },
  centerImage: {
    width: 95,
    height: 95,
    borderRadius: 110,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  saveButton: {
    width: "70%", // Take up full width
    height: 54,
    borderRadius: 20,
    backgroundColor: Colors.Btn_Positive,
    justifyContent: "center",
    marginBottom: 20,
    elevation: 10,
    marginTop: 20,
    alignSelf: "center",
  },
  buttonTextsave: {
    color: Colors.scondory,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
})