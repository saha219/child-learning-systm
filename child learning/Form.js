import React, { Component } from 'react';
import { View, StyleSheet,  TextInput, Text,TouchableOpacity } from 'react-native';
import { Alert } from 'react-native-web';

export default class Form extends Component {

 
    state={
      Text : 'please enter 8 to 12 characters',
      text2:'please enter your email',
      Color:'',
      color2:'red'

     
    }

       Email = (Email) =>{
       let error5=this.props.error5
       let color5=this.props.color5
    if(Email.length==0){
       this.setState({text2:error5, color2:color5})
        }
    else
      {
        this.setState({text2:""})
      }
  }

      
      password = (password) =>{
       let error1=this.props.error1
       let error2=this.props.error2
       let error3=this.props.error3
       let error4=this.props.error4
       
       let color1=this.props.color1
       let color2=this.props.color2
       let color3=this.props.color3
       let color4=this.props.color4

       let passwordMinLength=this.props.passwordMinxLength

         if(password.length<passwordMinLength && password.length!=0){
           
             this.setState({Text:error1, Color: color1})
         }
         else if(password.length>=passwordMinLength&&password.length<=12){
             this.setState({Text:error2,Color: color2})
         }
         else if(password.length>12){
          this.setState({Text:error3, Color:color3})
      }
         else if(password.length==0){
             this.setState({Text:error4, Color:color4})
         }
        }
         
    
       
        alerts = () =>{
         let Alert1=this.props.Alert1;
         let Alert2=this.props.Alert2;
         
          if(this.state.Text==="Strong password"&&this.state.text2==="")
           {
             onPress=alert(Alert1)
           }
           else{
            onPress=alert(Alert2)
          
           }
     
          }
  
    
     render() {
       return (
    
   <View style={styles.Container}>
     
      <Text style={styles.FormName}>{this.props.FormName}</Text>
    <TextInput    
        placeholder={this.props.placeholderEmail}
        keyboardType={this.props.keyboardType}
        multiline={this.props.multiline}
        onChangeText={Email => this.Email(Email) }

        style={styles.TextInput}
      />
      <Text style={[styles.TextStyle, {color:this.state.color2}]}>{ this.state.text2}</Text>
    <TextInput    
        placeholder={this.props.placeholder}
        onChangeText={password => this.password(password) }
        secureTextEntry={this.props.secureTextEntry}
        multiline={this.props.multiline}
        maxLength={this.props.maxLength}
        
        style={styles.TextInput}
    
      />

          <Text style={[styles.TextStyle, {color:this.state.Color}]}>{ this.state.Text}</Text>


          <TouchableOpacity
          style={styles.buttonContainer}
          onPress={this.alerts}
          >
          <Text style={styles.buttonText} >
          {this.props.label}
          
          </Text>
          </TouchableOpacity>


   </View>
               
       );}
   }






const styles = StyleSheet.create(
{
  FormName:{
fontSize:40,
marginBottom:20,
color:'blue'

  },
  

  Container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 10,
    backgroundColor:'white',
  
   
    
   
  },

  TextInput:{
  
    height: 50,
    width: '20%',
    textAlign: 'center',
    marginBottom:10,
    borderStyle:'solid',
    borderRadius:25/2,
    borderWidth:1,
  },

  TextStyle: {
    textAlign: 'center',
    fontSize: 15,
    padding:5,
    marginRight:30
  },
  buttonContainer:{
  
    backgroundColor:'blue',
    width:'20%',
    height:50,
    borderRadius:15,
    alignItems:'center',
    justifyContent:'center',
    marginBottom:10,
    marginTop:30
    
    

},
buttonText:{
  
    color:'white',
    fontSize:20,
    fontWeight:'bold'
    

  
}

  


});







