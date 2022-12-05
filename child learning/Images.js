import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Images = ({x}) => {
    if(x===1){
  return (
  <Image 
      style={styles.cStyle} 
      source={require('./Lion.jpg')}      
    /> 
  )}
  if(x===2){
       return (
            <Image 
                style={styles.cStyle} 
                source={require('./Ant.jpg')}
              /> 
            )}     
            if(x===3){
                return (
                <Image 
                    style={styles.cStyle} 
                    source={require('./Zebra.jpg')}
                    resizeMode='stretch'
                  /> 
                )}
                if(x===4){
                    return (
                    <Image 
                        style={styles.cStyle} 
                        source={require('./Eye.jpg')}                        
                      /> 
                    )}
                    if(x===5){
                        return (
                        <Image 
                            style={styles.cStyle} 
                            source={require('./backgoundOIP.jpg')}
                            resizeMode='stretch'
                            
                          /> 
                        )}
                        if(x===6){
                            return (
                            <Image 
                                style={styles.cStyle} 
                                source={require('./Planet9_3840x2160.jpg')}
                                resizeMode='stretch'
                                
                              /> 
                            )}
}

export default Images

const styles = StyleSheet.create({
    cStyle:{
        width:350,
        height:320,
        margin:10,
        padding:30,
        borderRadius:55,  
       }
    })