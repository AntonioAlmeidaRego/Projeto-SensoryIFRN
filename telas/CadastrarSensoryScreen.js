import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView, Image, AsyncStorage} from 'react-native';


type Props = {};
export default class CadastrarSensoryScreen extends Component<Props> {

    state = {
        checked: true,
        listaCriterios: [
            {
                id: 1,
                nome: 'COR'
            },

            {
                id: 2,
                nome: 'AROMA'
            },

            {
                id: 3,
                nome: 'TEXTURA'
            },

            {
                id: 4,
                nome: 'SABOR'
            },

            {
                id: 5,
                nome: 'IMPRESSÃO GLOBAL'
            }
        ]
    }

    render() {
        return (

            <View>
            <Text>Produto Avaliado: {this.props.navigation.state.params.nomepro}</Text>
            <Text>Quesitos para serem avaliados</Text>
            <Text>COR</Text>
            <Text>AROMA</Text>
            <Text>TEXTURA</Text>
            <Text>SABOR</Text>
            <Text>IMPRESSÃO GLOBAL</Text>
            </View>

           

        );
    }    
}    