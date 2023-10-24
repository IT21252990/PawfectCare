
import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  Modal,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert
} from "react-native";


const Notification = () => {

    
  return (

      <View style={{ flex: 1, marginHorizontal: 10 }}>
          <Text
            style={{
              fontSize: 40,
              fontWeight: 800,
              color: "#000000",
              marginTop: 50,
              marginLeft: 20,
            }}
          >
            Welcome Notification!
          </Text>

       
        </View>

      
  );
};

export default Notification;