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
  Alert,
} from "react-native";
import Colors from "../assets/colors/colors";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { sendPasswordResetEmail, getAuth } from "firebase/auth";
import { FIREBASE_AUTH, FIRESTORE_DB, FIREBASE_APP } from "../firebaseConfig";

const ForgotPasswordPage = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");

  const auth = getAuth(FIREBASE_APP);

  const forgotPassword = (email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        Alert.alert("Password reset email sent");
      })
      .catch((error) => {
        console.error("Firebase Error:", error.code, error.message);
        Alert.alert("Password reset failed: " + error.message);
      });
  };

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
        <Text style={styles.welcomeText}>RESET PASSWORD</Text>
        <Image
          source={require("../assets/images/forgotPWlogo.png")}
          style={styles.loginPic}
        />
        <View>
          <Image
            source={require("../assets/images/forgot-pw-card.png")}
            style={styles.loginCard}
          />
          <View style={styles.username}>
            <Text style={styles.usernameLabel}>Enter Your Email Address :</Text>
            <View style={styles.usernameInput}>
              <Image
                source={require("../assets/images/icon-email.png")}
                style={styles.inputImage}
              />
              <TextInput
                placeholder="Enter your email"
                placeholderTextColor={Colors.scondory}
                keyboardType="email-address"
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={styles.input}
              />
            </View>
            <Text style={styles.text}>
              After send the your reset password request please check your
              emails to further process.
            </Text>
          </View>
          <View
            style={{
              marginTop: 720,
              flexDirection: "row",
              position: "absolute",
              alignSelf: "center",
            }}
          >
            <TouchableOpacity
              style={styles.cancelBtnContainer}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.btnCancel}>CENCEL</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={forgotPassword}
              style={styles.loginBtnContainer}
            >
              <Text style={styles.btnLogin}>SEND REQUEST</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default ForgotPasswordPage;

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
    fontWeight: "bold",
    alignSelf: "center",
  },
  loginPic: {
    width: 150,
    height: 150,
    position: "absolute",
    marginTop: 140,
    alignSelf: "center",
  },
  loginCard: {
    marginLeft: 20,
    marginTop: 315,
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
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 8,
  },
  username: {
    position: "absolute",
    marginTop: 380,
    marginLeft: 60,
  },
  usernameInput: {
    flexDirection: "row",
    alignItems: "center",
    width: 270,
    marginTop: 30,
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
  loginBtnContainer: {
    width: 190,
    height: 50,
    borderRadius: 20,
    backgroundColor: Colors.Btn_Positive,
    justifyContent: "center",
    alignSelf: "center",
    left: 20,
  },
  cancelBtnContainer: {
    width: 130,
    height: 50,
    borderRadius: 20,
    backgroundColor: Colors.Btn_Negative,
    justifyContent: "center",
    alignSelf: "center",
  },
  btnLogin: {
    textAlign: "center",
    color: Colors.scondory,
    fontSize: 24,
    fontWeight: "bold",
  },
  btnCancel: {
    textAlign: "center",
    color: Colors.scondory,
    fontSize: 24,
    fontWeight: "bold",
  },
  text: {
    width: 250,
    fontSize: 18,
    textAlign: "center",
    color: Colors.scondory,
    alignSelf: "center",
    marginTop: 50,
  },
});
