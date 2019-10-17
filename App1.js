import React, { Component } from 'react';
import { View, Text,StyleSheet,TextInput, Button } from 'react-native';

export default class App1 extends Component {
  state={
    username:'',
    password:''
  }
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  //   this.state.customStyles={
  //     color:'red'
  //   }
  //   setInterval(()=>{
  //     if (this.state.customStyles.color=='red') {
  //       this.setState({customStyles:{color:'green'}})
        
  //     } else {
  //       this.setState({customStyles:{color:'red'}})
  //     }
  //   },1000)
  // }
  buttonPressed=()=>{
    alert(`username is ${this.state.username}, while password is ${this.state.password}`)
  }
  render() {
    return (
      <View style={{flex:1, padding:10,justifyContent:'center',
          alignItems:'center'}}>
        <Text>Username</Text>
        <TextInput 
        placeholder="Enter your Username"
          defaultValue={this.state.username}
          onChangeText={(username)=>this.setState({username:username})} />
        
        <Text>Password</Text>
        <TextInput
        secureTextEntry={true} 
          placeholder="Enter your password"
          defaultValue={this.state.password}
          onChangeText={(password)=>this.setState({password:password})} />
      
        <Button  title={'Submit'} onPress={this.buttonPressed}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  welcome:{
    fontSize:20,
    textAlign:'center',
    margin:10,
    
  }
})
