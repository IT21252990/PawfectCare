import React  , {useEffect } from "react";
import { View, Text, Image, StyleSheet, Animated } from "react-native";
import Colors from "../assets/colors/colors";
import { useNavigation } from "@react-navigation/native";

const LoadingPage = () => {

    const navigation = useNavigation();

    useEffect(() => {
      // Navigate to the LoginPage after 3 seconds
      const timeout = setTimeout(() => {
        navigation.navigate("LoginPage"); // Replace "LoginPage" with the actual name of your login screen
      }, 2000);
  
      return () => {
        // Clear the timeout to avoid memory leaks
        clearTimeout(timeout);
      };
    }, [navigation]);

  return (
    <View style={styles.backGround}>
      <Image
        source={require("../assets/images/logo.png")}
        style={styles.loadingPageLogo}
      />
      <Text style={styles.loadingPageAppName}>Pawfect Care</Text>
      <Image
        source={require("../assets/images/paw.png")}
        style={styles.paw}
      />
      <Image
        source={require("../assets/images/loader.gif")}
        style={styles.loadongPageLoaderGif}
      />
      <Text style={styles.loadingPageLoaderText}>Loading ...</Text>
    </View>
  );
};

export default LoadingPage;

const styles = StyleSheet.create({
  backGround: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  loadingPageLogo: {
    width: 250,
    height: 220,
    alignSelf:"center",
    marginTop: "35%",
  },
  loadingPageAppName: {
    color: Colors.scondory,
    fontSize: 40,
    textAlign: "center",
    marginTop: "5%",
  },
  loadongPageLoaderGif: {
    width: 100,
    height: 100,
    position: "absolute",
    alignSelf:"center",
    top: "75%",
  },
  paw:{
    width:25,
    height:35,
    position:"absolute",
    marginTop:365,
    marginLeft:228,
    transform: [{ rotate: '20deg'}]
  },
  loadingPageLoaderText: {
    color: Colors.scondory,
    fontSize: 24,
    textAlign: "center",
    marginTop: "80%",
  },
});
