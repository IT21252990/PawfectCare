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

const LoginPage = () => {
  const navigation = useNavigation();

  const [isPasswordShown, setIsPasswordShown] = useState(false);

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{
        height: Dimensions.get("window").height * 1.05,
        width: "100%",
      }}
    >
      <Image
        source={require("../assets/images/mainbg.jpeg")}
        style={styles.backgroundPic}
      />
      <View style={styles.loginPageContainer}>
        <Text style={styles.welcomeText}>Welcome Back ...</Text>
        <Image
          source={require("../assets/images/loginpic.png")}
          style={styles.loginPic}
        />
        <View>
          <Image
            source={require("../assets/images/loginCard.png")}
            style={styles.loginCard}
          />
          <Text style={styles.loginTitle}>LOGIN</Text>
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
          <TouchableOpacity
            style={styles.forgotpasswordText}
            onPress={() => navigation.navigate("ForgotPasswordPage")}
          >
            <Text style={styles.forgotpassword}>Forgot Password ?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginBtnContainer}>
            <Text style={styles.btnLogin}>LOGIN</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.linktoSignup}>
          <Text style={styles.signuplickdis}>Don't have an Account ? </Text>
          <TouchableOpacity
            style={styles.signuptouch}
            onPress={() => navigation.navigate("SignUpChoosePage")}
          >
            <Text style={styles.signup}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  loginPageContainer: {
    flex: 1,
    margin: 0,
    position: "absolute",
  },
  backgroundPic: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  welcomeText: {
    color: Colors.scondory,
    fontSize: 40,
    position: "absolute",
    marginTop: 50,
    marginLeft: 20,
  },
  loginPic: {
    width: 200,
    height: 200,
    position: "absolute",
    marginTop: 90,
    marginLeft: 80,
  },
  loginCard: {
    marginLeft: 15,
    marginTop: 280,
  },
  loginTitle: {
    position: "absolute",
    fontSize: 40,
    fontWeight: "bold",
    color: Colors.scondory,
    marginLeft: 140,
    marginTop: 300,
  },
  usernameLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 8,
  },
  email: {
    position: "absolute",
    marginTop: 380,
    marginLeft: 60,
  },
  password: {
    position: "absolute",
    marginTop: 480,
    marginLeft: 60,
  },
  usernameInput: {
    flexDirection: "row",
    alignItems: "center",
    width: 270,
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
  forgotpasswordText: {
    position: "absolute",
    marginTop: 580,
    marginLeft: 230,
  },
  forgotpassword: {
    color: Colors.scondory,
    textDecorationLine: "underline",
  },
  loginBtnContainer: {
    position: "absolute",
    marginTop: 660,
    width: 180,
    height: 50,
    borderRadius: 20,
    backgroundColor: Colors.Btn_Positive,
    justifyContent: "center",
    alignSelf: "center",
  },
  btnLogin: {
    textAlign: "center",
    color: Colors.scondory,
    fontSize: 24,
    fontWeight: "bold",
  },
  linktoSignup: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 7,
  },
  signuplickdis: {
    fontSize: 16,
    color: Colors.scondory,
  },
  signup: {
    fontSize: 18,
    color: Colors.scondory,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
