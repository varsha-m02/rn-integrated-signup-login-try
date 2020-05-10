import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, View, Dimensions,TouchableOpacity,
Button,Alert,Image,ImageBackground,StatusBar} from 'react-native';

export default class App extends Component{

constructor(props) {
   super(props);
    //this.login= this.login.bind(this);
    this.registerCall = this.registerCall.bind(this);
    var {height, width} = Dimensions.get('window');
    this.state = {screenHeight: height, screenWidth: width,
                 firstName: '',
                 lastName:'',
                 staffId : '',
                 password: '',
                 confirmPassword:'',
                 baseUrl: 'http://localhost:4000/employee' };

   }

onClickListener = (viewId) => {
        // Alert.alert(this.state.Usrname+" "+this.state.email+" "+this.state.password , "View_id "+viewId);
        if(this.state.firstName || this.state.firstName != " "){
          if(this.state.lastName || this.state.lastName!=" "){
            if(this.state.staffId){
              if(this.state.password===this.state.confirmPassword){
                this.registerCall();
              }else{
                // console.log("Password is not matching");
        Alert.alert("Password is not matching");

              }
            }else{
        Alert.alert("Please enter staffId");
        }
        }else{
      Alert.alert("Please enter lastname");
   }}else{
    Alert.alert("Please enter firstname");}
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
         body: JSON.stringify({firstName: that.state.firstName, lastName: that.state.lastName,staffId:that.state.staffId,password: that.state.password})
         }).then(function (response) {
           return response.json();
         }).then(function (result) { 
          //  console.log(result);
          if(result==='Successfully registered'){
            Alert.alert('Successfully registered with ID:'+that.state.staffId)
          }
        
})
}
  // const userInputObj={
  //   firstName: this.state.firstName,
  //    lastName: this.state.lastName,
  //   staffId:this.state.staffId,
  //   password: this.state.password
  // }
  // console.log("POST data:",userInputObj)
  // axios.post(this.state.baseUrl,userInputObj)
  //   .then((good)=>{
  //     console.log("successfull")})
  //   .catch((bad)=>{
  //     console.log(bad)
    
  //   })

render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          {/* <Image
            style={styles.inputIcon}
            source={{
              uri: "https://png.icons8.com/male-user/ultraviolet/50/3498db"
            }}
          /> */}
          <TextInput
            style={styles.inputs}
            placeholder="Enter First Name"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={firstName => this.setState({ firstName:firstName })}
          />
        </View>
        
        <View style={styles.inputContainer}>
          {/* <Image
            style={styles.inputIcon}
            source={{
              uri: "https://png.icons8.com/male-user/ultraviolet/50/3498db"
            }}
          /> */}
          <TextInput
            style={styles.inputs}
            placeholder="Enter Last Name"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={lastName => this.setState({ lastName:lastName })}
          />
        </View>
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

        <View style={styles.inputContainer}>
          {/* <Image
            style={styles.inputIcon}
            source={{
              uri: "https://png.icons8.com/key-2/ultraviolet/50/3498db"
            }}
          /> */}
          <TextInput
            style={styles.inputs}
            placeholder="Confirm Password"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={confirmPassword => this.setState({ confirmPassword : confirmPassword})}
          />
        </View>



   <TouchableOpacity style={styles.submitButtonText} onPress={() => this.onClickListener('sign_up')}>
     <Text style={styles.signUpText}>Sign up</Text>
   </TouchableOpacity>
  </View>
)}
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DFEBF3"
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
   backgroundColor: '#7a42f4',
   width:250,
   height:45,
   borderRadius:10,
   justifyContent: 'center',
   alignItems: 'center'
 },
 signUpText:{
   color: '#FFFFFF',
   alignItems: 'center'
 }
})