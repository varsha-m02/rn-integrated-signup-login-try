import React, { Component } from 'react';
import { View, Text, StyleSheet, Button,Dimensions,TextInput, Alert,TouchableOpacity,Image } from 'react-native';
import { Constants } from 'expo';
export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
         //this.login= this.login.bind(this);
         this.registerCall = this.registerCall.bind(this);
         var {height, width} = Dimensions.get('window');
         this.state = {screenHeight: height, screenWidth: width,
                      staffId : '',
                      password: '',
                      baseUrl: 'http://localhost:4000/employee/verify' };
     
        }

        onClickListener = (viewId) => {
            // Alert.alert(this.state.Usrname+" "+this.state.email+" "+this.state.password , "View_id "+viewId);
            
                if(this.state.staffId || this.state.staffId!=" "){
                  if(this.state.password || this.state.password!=" "){
                    this.registerCall();
                  }else{
                    // console.log("Please enter the password");
                    Alert.alert("Please enter the password");

                  }
                }else{
            Alert.alert("Please enter staffId");
            }
            }
    
    registerCall(){
       var that = this;
       var url = that.state.baseUrl ;
        // console.log("url:"+url);
        // console.log(this.state.staffId)
       fetch(url,{
            method: 'POST',
            headers:{Accept:'application/json',
            'Content-Type':'application/json',},
             body: JSON.stringify({staffId:that.state.staffId,password: that.state.password})
             }).then(function (response) {
               return response.json();
             }).then(function (result) { 
              //  console.log(result);
              if(result==='Login Successful'){
                Alert.alert('Successfully logged in')
              }
              else{
                Alert.alert(result)
              }
            //    Alert.alert([{Text:"Successfully logged in"},{Text:"OK",onPress:()=>{this.props.navigation.navigate('Home')}}])
            
    })}
  render() {
    return (
        <View style={styles.container}>
          {/* <View style={styles.inputContainer}>
            <Image source={require('./assets/image4login.png')}/>
          </View> */}
        <View style={styles.inputContainer}>
          {/* <Image
            style={styles.inputIcon}
            source={{
              uri: "https://png.icons8.com/male-user/ultraviolet/50/3498db"
            }}
          /> */}
          <TextInput
            style={styles.inputs}
            placeholder="Enter Staff Id"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={staffId => this.setState({ staffId:staffId })}
          />
        </View>

        <View style={styles.inputContainer}>
          {/* <Image
            style={styles.inputIcon}
            source={{
              uri: "https://png.icons8.com/key-2/ultraviolet/50/3498db"
            }}
          /> */}
          <TextInput
            style={styles.inputs}
            placeholder="Enter Password"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={password => this.setState({ password:password })}
          />
        </View>



   <TouchableOpacity style={styles.submitButtonText} onPress={() => this.onClickListener('login')}>
     <Text style={styles.loginText}>Login</Text>
   </TouchableOpacity>
   {/* <View>
       <Text>Not yet Registered?<TouchableOpacity style={styles.navigateButton} onPress={()=>this.props.navigation.navigate('SignUp')}>
         <Text style={styles.signUpText}>Sign Up</Text></TouchableOpacity></Text>
   </View> */}
   <TouchableOpacity style={styles.navigateButton} onPress={()=>this.props.navigation.navigate('SignUp')}>
         <Text style={styles.forgotPasswordText}>Forgot Password?</Text></TouchableOpacity>
  
  </View>
)}
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#99ffcc"
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: "center"
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30
  },
  

  submitButton: {
   backgroundColor: '#7a42f4',
   padding: 10,
   margin: 15,
   height: 60,
 },
 submitButtonText:{
   color: '#FFFFFF',
   backgroundColor: '#004d2e',
   width:250,
   height:45,
   borderRadius:10,
   justifyContent: 'center',
   alignItems: 'center'
 },
 loginText:{
   color: '#FFFFFF',
   alignItems: 'center'
 },
 navigateButton:{
   backgroundColor:'#99ffcc',
   marginTop: 10,
},
signUpText:{
  color: '#000000',
  // textDecorationLine:'underline',
  fontWeight:'bold',
  alignItems: 'center',
  margin:10,
},
})