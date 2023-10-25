// ReviewCard.js

import React from "react";
import { View, Text, StyleSheet , Image } from "react-native";
import Colors from "../../../assets/colors/colors";

const FetchReviews = ({ user, description }) => {
  return (
    <View style={styles.cardContainer}>
         <View style={styles.avatarContainer}>
      <Image
        source={require("../../../assets/images/loginpic.png")}
        style={styles.avatarImage}
      />
      </View>
      <Text style={styles.userName}>{user}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 10,
    elevation: 5,
    height: 130,
    width: 250,
    marginLeft: 20,
    marginTop:20,
    marginBottom:20,
    flexDirection: "column",
    borderColor: Colors.Btn_Negative,
    borderWidth: 2,
  },
  userName: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.scondory,
  },
  description: {
    fontSize: 16,
    width: 200,
    textAlign: "center",
    alignSelf: "center",
    marginTop: 40,
  },
  avatarContainer:{
    borderWidth:2,
    width:60,
    height:60,
    position:"absolute",
    borderRadius:60,
    backgroundColor:Colors.ternary,
    marginLeft:20,
    marginTop:10,
    borderColor:Colors.primary
  },
  avatarImage:{
    width:55,
    height:55,
  },
});

export default FetchReviews;
