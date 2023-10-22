import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Button,
} from "react-native";
import Colors from "../assets/colors/colors";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const SignUpChoosePage = () => {
  const navigation = useNavigation();
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{
        height: Dimensions.get("window").height * 1.046,
        width: "100%",
      }}
    >
      <Image
        source={require("../assets/images/mainbg.jpeg")}
        style={styles.backgroundPic}
      />

      <View style={{ flex: 1, margin: 0, position: "absolute" }}>
        <Text style={styles.mainTitle}>SIGN UP</Text>
        <Text style={styles.subTitle}>Select who you are ...</Text>

        <TouchableOpacity 
            onPress={()=>navigation.navigate("SignUpPagePetOwner")}
        >
          <Image
            source={require("../assets/images/signupchoosecard.png")}
            style={styles.card1}
          />
           <Image
            source={require("../assets/images/pet-owner-card.png")}
            style={styles.petOwnerCard}
          />
          <Text style= {styles.petOwnerText}>Pet Owner</Text>
        </TouchableOpacity>
        <TouchableOpacity
         onPress={()=>navigation.navigate("SignUpPagePetSitter")}
        >
          <Image
            source={require("../assets/images/signupchoosecard.png")}
            style={styles.card2}
          />
          <Image
            source={require("../assets/images/pet-sitter-card.png")}
            style={styles.petSitterCard}
          />
          <Text style= {styles.petSitterText}>Pet Sitter</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
        onPress={()=>navigation.navigate("SignUpPagePetCareCenter")}
        >
          <Image
            source={require("../assets/images/signupchoosecard.png")}
            style={styles.card3}
          />
          <Image
            source={require("../assets/images/pet-carecenter-card.png")}
            style={styles.petCareCnterCard}
          />
          <Text style= {styles.petCareCenterText}>Pet Care Center</Text>
        </TouchableOpacity>

        <View style={styles.linktologin}>
            <Text style={styles.loginlickdis}>Already have an Account ?   </Text>
            <TouchableOpacity 
            style={styles.logintouch}
            onPress={() => navigation.navigate("LoginPage")}>
              <Text style={styles.login}>LOGIN</Text>
            </TouchableOpacity>
          </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default SignUpChoosePage;

const styles = StyleSheet.create({
  backgroundPic: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  mainTitle: {
    position: "absolute",
    marginTop: 50,
    color: Colors.scondory,
    fontSize: 48,
    marginLeft: 100,
    fontWeight: "bold",
  },
  subTitle: {
    position: "absolute",
    marginTop: 130,
    fontSize: 30,
    marginLeft: 20,
  },
  petOwnerCard:{
    position: "absolute",
    marginTop: 210,
    width: 120,
    height: 120,
    marginLeft: 40,
  },
  card1: {
    position: "absolute",
    marginTop: 200,
    width: 350,
    height: 180,
    marginLeft: 20,
  },
  petOwnerText:{
    position:"absolute",
    marginTop:260,
    fontSize:30,
    fontWeight:"bold",
    marginLeft:200,
    color:Colors.scondory
  },
  petSitterCard:{
    position: "absolute",
    marginTop: 390,
    width: 130,
    height: 130,
    marginLeft: 40,
  },
  petSitterText:{
    position:"absolute",
    marginTop:450,
    fontSize:30,
    fontWeight:"bold",
    marginLeft:200,
    color:Colors.scondory
  },
  card2: {
    position: "absolute",
    marginTop: 380,
    width: 350,
    height: 180,
    marginLeft: 20,
  },
  petCareCnterCard:{
    position: "absolute",
    marginTop: 570,
    width: 120,
    height: 120,
    marginLeft: 40,
  },
  petCareCenterText:{
    position:"absolute",
    marginTop:620,
    fontSize:30,
    fontWeight:"bold",
    marginLeft:160,
    color:Colors.scondory
  },
  card3: {
    position: "absolute",
    marginTop: 560,
    width: 350,
    height: 180,
    marginLeft: 20,
  },
  linktologin:{
    position:"absolute",
    flexDirection:"row",
    marginTop:770,
    marginLeft:80
  },
  loginlickdis:{
    fontSize:16,
    color:Colors.scondory
  },
  login:{
    fontSize:18,
    color:Colors.scondory,
    fontWeight:"bold",
    textDecorationLine:"underline"
  },
});
