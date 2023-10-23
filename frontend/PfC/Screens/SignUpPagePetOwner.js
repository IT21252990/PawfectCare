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

import BottomNavigation from './PetOwner/Navigations/BottomNavigation'

const SignUpPagePetOwner = () => {
  const navigation = useNavigation();

  const [isPasswordShown, setIsPasswordShown] = useState(false);


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
        <Text style={styles.subTitle}>Pet Owner</Text>

        <View>
          <Image
            source={require("../assets/images/signupbgcard.png")}
            style={styles.bgcard}
          />

            <View style={styles.username}>
              <Text style={styles.usernameLabel}>Username:</Text>
              <View style={styles.usernameInput}>
                <Image
                  source={require("../assets/images/icon-user-dark.png")}
                  style={styles.inputImage}
                />
                <TextInput
                  placeholder="Enter your Username"
                  placeholderTextColor={Colors.scondory}
                  keyboardType="default"
                  style={styles.input}
                />
              </View>
            </View>

            <View style={styles.email}>
              <Text style={styles.usernameLabel}>Email :</Text>
              <View style={styles.usernameInput}>
                <Image
                  source={require("../assets/images/icon-email.png")}
                  style={styles.inputImage}
                />
                <TextInput
                  placeholder="Enter your Email "
                  placeholderTextColor={Colors.scondory}
                  keyboardType="email-address"
                  style={styles.input}
                />
              </View>
            </View>

            <View style={styles.password}>
              <Text style={styles.usernameLabel}>Password:</Text>
              <View style={styles.usernameInput}>
                <Image
                  source={require("../assets/images/icon-password-dark.png")}
                  style={styles.inputImage}
                />
                <TextInput
                  placeholder="Enter your Password"
                  placeholderTextColor={Colors.scondory}
                  secureTextEntry={!isPasswordShown}
                  keyboardType="default"
                  style={styles.input}
                />
                <TouchableOpacity
                  onPress={() => setIsPasswordShown(!isPasswordShown)}
                  style={{
                    position: "absolute",
                    right: 12,
                  }}
                >
                  {isPasswordShown == true ? (
                    <Image
                      source={require("../assets/images/icon-eye-off.png")}
                      style={{}}
                    />
                  ) : (
                    <Image
                      source={require("../assets/images/icon-eye.png")}
                      style={{}}
                    />
                  )}
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.confirmPassword}>
              <Text style={styles.usernameLabel}>Confirm Password:</Text>
              <View style={styles.usernameInput}>
                <Image
                  source={require("../assets/images/icon-password-dark.png")}
                  style={styles.inputImage}
                />
                <TextInput
                  placeholder="Enter your Confirm Password"
                  placeholderTextColor={Colors.scondory}
                  secureTextEntry={!isPasswordShown}
                  keyboardType="default"
                  style={styles.input}
                />
                <TouchableOpacity
                  onPress={() => setIsPasswordShown(!isPasswordShown)}
                  style={{
                    position: "absolute",
                    right: 12,
                  }}
                >
                  {isPasswordShown == true ? (
                    <Image
                      source={require("../assets/images/icon-eye-off.png")}
                      style={{}}
                    />
                  ) : (
                    <Image
                      source={require("../assets/images/icon-eye.png")}
                      style={{}}
                    />
                  )}
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity 
              style={styles.signupBtnContainer}
              onPress={() => navigation.navigate("BottomNavigation")}>
              <Text style={styles.btnSignup}>
                SIGN UP
              </Text>
            </TouchableOpacity> 

            <TouchableOpacity
              style={styles.backToChooseSignup}
              onPress={() => navigation.navigate("SignUpChoosePage")}
            >
              <Text style={styles.back2SignupText}>I am not a Pet Owner</Text>
            </TouchableOpacity>

          <View style={styles.linktologin}>
            <Text style={styles.loginlickdis}>Already have an Account ? </Text>
            <TouchableOpacity
              style={styles.logintouch}
              onPress={() => navigation.navigate("LoginPage")}
            >
              <Text style={styles.login}>LOGIN</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default SignUpPagePetOwner;

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
  bgcard: {
    position: "absolute",
    marginTop: 170,
    width: 395,
    height: 680,
  },
  linktologin: {
    position: "absolute",
    flexDirection: "row",
    marginTop: 770,
    marginLeft: 80,
  },
  backToChooseSignup:{
    position: "absolute",
    flexDirection: "row",
    marginTop: 710,
    marginLeft: 120,
  },
  back2SignupText:{
    fontSize: 20,
    color: Colors.scondory,
    textAlign:"center",
    textDecorationLine:"underline"
  },
  loginlickdis: {
    fontSize: 16,
    color: Colors.scondory,
  },
  login: {
    fontSize: 18,
    color: Colors.scondory,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  usernameLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 8,
  },
  username: {
    position: "absolute",
    marginTop: 220,
    marginLeft: 20,
  },
  email:{
    position: "absolute",
    marginTop: 320,
    marginLeft: 20,
  },
  password:{
    position: "absolute",
    marginTop: 420,
    marginLeft: 20,
  },
  confirmPassword:{
    position: "absolute",
    marginTop: 520,
    marginLeft: 20,
  },
  usernameInput: {
    flexDirection: "row",
    alignItems: "center",
    width: 350,
  },
  signupBtnContainer:{
    position:"absolute",
    marginTop:630,
    width:180,
    height:50,
    borderRadius:20,
    backgroundColor:Colors.Btn_Positive,
    justifyContent:"center",
    marginLeft:180
  },
  btnSignup:{
    textAlign:"center",
    color:Colors.scondory,
    fontSize:24,
    fontWeight:"bold"
  },
  inputImage: {
    width: 30,
    height: 30,
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 50,
    borderColor: Colors.ternary,
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 22,
    fontSize: 16,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOffset: {
      width: 10,
      height: 5,
    },
    shadowOpacity: 0.8,
    backgroundColor: Colors.ternary,
  },
});
