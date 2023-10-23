import { 
  Text, 
  View,
  KeyboardAwareScrollView,
 } from 'react-native'
import React, { Component } from 'react'

const CenterProfile = () => {
    return (
      <KeyboardAwareScrollView>
        <View style={{ alignSelf:'center' , marginTop:400}}>
        <Text style={{ fontSize:40 , fontWeight:'bold'}}>Carecenter Profile</Text>
      </View>
      </KeyboardAwareScrollView>
        
    )
}

export default CenterProfile;