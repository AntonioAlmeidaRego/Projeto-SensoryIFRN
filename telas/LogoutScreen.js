import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, AsyncStorage} from 'react-native';
 
 


type Props = {};
export default class LogoutScreen extends Component<Props> {

  static navigationOptions = {
      drawerLabel: 'Logout',
      drawerIcon: ({ tintColor }) => (
            <Image
                source={require('../imagens/sair.png')}
                style={styles.icon}        
            />
      ),
  };

  state={
    users: '',
  };

  async componentDidMount(){
    await AsyncStorage.setItem("@SessaoLogin:sensoryIFRN", JSON.stringify(this.state.users));
    this.props.navigation.navigate("LoginScreen");
  }
  
  render() {
    return (
        <View></View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});