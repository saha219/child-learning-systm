import { StyleSheet, Text, View ,TouchableOpacity,ImageBackground,BackHandler} from 'react-native'
import React,{useState} from 'react'
import Starts from './Starts'

const Ends = ({endSetter,Wrong,startAgain,scoteTrue}) => {
  const [grade,setgrade]=useState(
    Wrong>=4?'Excellent score':'Bad score Try again!!!'      
  ) 
  const exist=()=>{
   
  }
  

    return (
      
 <ImageBackground 
    source={require('./BG.jpg')} 
    style={styles.image} 
    >
    <View style={{flex:1,alignItems: 'center',justifyContent:'center'}}>
       <Text style={styles.sT1}>End Quiz</Text>
    </View>
    <View style={{flex:1,alignItems: 'center',justifyContent:'center',width:300,borderRadius:45,paddingTop:31,paddingRight:20}}>
      <Text style={styles.sT2}>Quiz Score</Text>
      <Text style={styles.sT3}>{Wrong}/6</Text>
      <Text style={styles.sT4}>{grade}</Text>
    </View>
    <View style={{flex:2,alignItems: 'center',justifyContent:'center'}}>
      <TouchableOpacity style={styles.as} onPress={startAgain}>Start again</TouchableOpacity>
      <TouchableOpacity style={styles.as}  onPress={()=> BackHandler.exitApp()}>Exit</TouchableOpacity>
    </View>
  </ImageBackground>

  )
}

export default Ends

const styles = StyleSheet.create({
  sT1:{
    color:'#5F9EA0',//baze white:F0F8FF
    fontSize:32,
    fontStyle:'italic',
    fontFamily:'Fantasy',
    fontWeight:'bold',
    margin:20

},
sT2:{
  color:'#DEB887',
  fontSize:23,
  fontStyle:'italic',
  fontFamily:'Fantasy',
},
sT3:{
  color:'#DEB887',//#DEB887
  fontSize:23,
  fontStyle:'italic',
  fontFamily:'Fantasy'
},
sT4:{
        color:'#DEB887',
        fontSize:25,
        fontStyle:'italic',
        fontFamily:'Fantasy'
  },
image:{
    justifyContent:'space-around',
    alignItems: 'center',
    height:'100%',
    width:420,
    marginTop:15,
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
        color:'#DEB887',
        fontSize:25,
        fontStyle:'italic',
        fontFamily:'Fantasy',
        marginTop:10
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
        fontFamily:'Fantasy',
        color:'#5F9EA0',
        backgroundColor:'lightblue'  
      },
})