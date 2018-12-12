/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,    
  TouchableOpacity 
} from 'react-native'; 
 
type Props = {};
export default class Coordinator extends Component<Props> {
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>{this.props.nome}</Text>
                <Text style={styles.info}>{this.props.email}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        margin: 20,
        padding: 15,      
        backgroundColor: '#fff',
        borderRadius: 20,
      },
      text:{
        color: '#000',
        fontWeight: 'bold',
        textAlign: 'center',   
        fontSize: 18,
      },
      info:{
        color: '#000',
        fontSize: 14,
        textAlign: 'center',   
      },
     buttonExcluir:{
     	padding: 15,
        marginBottom: 20,        
     },
     buttonText:{
     	fontSize: 20,
        textAlign: 'right',
     },
 
});