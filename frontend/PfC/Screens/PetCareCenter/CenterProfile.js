import { Text, View } from 'react-native'
import React, { Component } from 'react'

export default class CenterProfile extends Component {
  render() {
    return (
        <View style={{ alignSelf:'center' , marginTop:400}}>
        <Text style={{ fontSize:40 , fontWeight:'bold'}}>Carecenter Profile</Text>
      </View>
    )
  }
}