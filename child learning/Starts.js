import { Text, View ,TouchableOpacity,StyleSheet,ImageBackground} from 'react-native'
import React, { Component } from 'react'

export class Starts extends Component {
  render() {
    return (
   
      <ImageBackground 
      source={require('./SYYY.jpg')} 
      style={styles.image} 
      >
        <View style={{alignItems:'center',marginTop:30}}>
          <Text style={styles.sText}>KIDS</Text>
         <Text style={styles.sText}>OBJECT IDENTIFICATION</Text>
         <Text style={styles.sText}>Quiz</Text>
        </View>
      <TouchableOpacity style={styles.as} onPress={()=>this.props.boolSsetter()}>Start Quiz</TouchableOpacity>
      </ImageBackground>
   )
  }
}

export default Starts
    const styles = StyleSheet.create({
      image:{
        justifyContent:'space-between',
        alignItems: 'center',
        height:'98%',
        width:410,
        marginTop:10,
      },
      Container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor:'white',
        borderStyle:'solid',
        borderWidth:1,
        borderColor:'red',  
        borderRadius:45,  
      },
       sText:{
            color:'grey',
            fontSize:25,
            fontStyle:'italic',
            fontFamily:'Fantasy'
          },   
          as:{
            justifyContent: 'center',
            alignItems: 'center',
            textAlign:'center',
            borderColor:'lightblue',
            borderWidth:3,
            borderRadius:25,
            height:45,
            width:320,
            margin:5,
            marginBottom:45,
            fontFamily:'Fantasy',
            color:'blue',
            backgroundColor:'green'  
          },
    })
/**
   <View style={styles.Container}>
      <TouchableOpacity style={styles.as} onPress={()=>boolSsetter}>Start Quiz</TouchableOpacity>
      <TouchableOpacity style={styles.as}>Continues</TouchableOpacity>
      <TouchableOpacity style={styles.as}>Exit</TouchableOpacity>
    </View>
 */
/*
    as:{
      justifyContent: 'center',
      alignItems: 'center',
      textAlign:'center',
      borderColor:'lightblue',
      borderWidth:3,
      borderRadius:25,
      height:45,
      width:320,
      margin:5,
      fontFamily:'Fantasy',
      color:'#5F9EA0'  
    },
    Container: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      margin: 10,
      backgroundColor:'white', 
      borderStyle:'solid',
    borderWidth:1,
    borderColor:'red',
    borderRadius:55,   
    },*/