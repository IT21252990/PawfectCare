import React  , {useEffect } from "react";
import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import Colors from "../assets/colors/colors";
import { useNavigation } from "@react-navigation/native";

const LoginPage = () => {

   

  return (
    <>
    <Image source={require("../assets/images/mainbg.jpeg")} style = {styles.backgroundPic}/>
    <View style={styles.loginPageContainer}>
      <Text style={styles.welcomeText}>Wellcome Back ...</Text>
      <Image source={require("../assets/images/loginpic.png")} style = {styles.loginPic}/>
      <View>
        <Image source={require("../assets/images/loginCard.png")} style = {styles.loginCard}/>
      <Text style={styles.loginTitle}>LOGIN</Text>
      <View style={{ marginBottom: 12 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 400,
                marginVertical: 8,
              }}
            >
              Username :
            </Text>

            <View
              style={{
                width: "100%",
                height: 48,
                borderColor: Colors.primary,
                borderWidth: 1,
                borderRadius: 8,
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: 22,
              }}
            >
              <TextInput
                placeholder="Enter your Username"
                placeholderTextColor={Colors.primary}
                // value={email}
                // onChangeText={(text) => setEmail(text)}
                keyboardType="default"
                style={{
                  width: "100%",
                }}
              />
            </View>
          </View>
      </View>
      
    </View>
    
    </>
    
  );
};

export default LoginPage;

const styles = StyleSheet.create({
    loginPageContainer:{
        flex:1,
        margin:0,
        position:"absolute"
    },
    backgroundPic:{
        width:"100%",
        height:"100%",
        position:"relative"
    },
    welcomeText:{
        color:Colors.scondory,
        fontSize:40,
        position:"absolute",
        marginTop:50,
        marginLeft:20
    },
    loginPic:{
        width:200,
        height:200,
        position:"absolute",
        marginTop:90,
        marginLeft:80
    },
    loginCard:{
        marginLeft:15,
        marginTop:280,
    },
    loginTitle:{
        position:"absolute",
        fontSize:40,
        fontWeight:"bold",
        color:Colors.scondory,
        marginLeft:140,
        marginTop:300
    },
});
