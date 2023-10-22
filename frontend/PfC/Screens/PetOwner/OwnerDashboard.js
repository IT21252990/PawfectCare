import { Text, View } from 'react-native'
import React, { Component } from 'react'

export default class OwnerDashboard extends Component {
  render() {
    return (
      <View style={{ alignSelf:'center' , marginTop:400}}>
        <Text style={{ fontSize:40 , fontWeight:'bold'}}>Owner Dashboard</Text>
      </View>
    )
  }
}