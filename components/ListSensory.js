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
export default class ListSensory extends Component<Props> {
    avaliar = async(id, nomeProduto)=>{
        this.props.navigation.navigate('Question', {id: id, nomeProduto: nomeProduto});
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>{this.props.nomeInstituicao}</Text>
                <Text style={styles.text}>{this.props.nomeProduto}</Text>         
                <TouchableOpacity onPress={() => this.avaliar(this.props.id, this.props.nomeProduto)} style={styles.buttonAdd}>
                    <Text style={styles.buttonText}>Participar da Análise</Text>
                </TouchableOpacity>  
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
     buttonAdd:{
        marginTop: '1.5%',
        alignSelf: 'center',
        width: '90%',
        backgroundColor: '#ccc',
        padding: 15,        
        borderRadius: 50,
    },
    buttonText:{        
        textAlign: 'center',
        color: '#000',
        fontSize: 20,
        padding: 15,        
    },
    add:{
        fontSize: 20,
        color: '#000',
    },
     buttonText:{
     	fontSize: 14,
        textAlign: 'center',
     },
 
});