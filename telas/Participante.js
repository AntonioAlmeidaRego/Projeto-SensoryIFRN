import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView, Image, AsyncStorage} from 'react-native';
 
type Props = {};
export default class Participante extends Component<Props> {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Bem-vindo</Text>
                </View>
            </View>
        );
    }    
}    


const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
    container:{
        flex: 1,
        backgroundColor: '#29db7d',
        justifyContent: 'center',
    },
    header:{
        backgroundColor: '#fff',
        padding: 20,
        borderBottomWidth: 4.5,
        borderColor: 'red',
    },
    headerText:{
        fontWeight: 'bold',
        fontSize: 20,
        color: '#000',
    },
    buttonAdd:{
        marginTop: '1.5%',
        alignSelf: 'center',
        width: '90%',
        backgroundColor: 'white',
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
    }
});