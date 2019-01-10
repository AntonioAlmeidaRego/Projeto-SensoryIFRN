import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView, Image, AsyncStorage} from 'react-native';

import AddSensoryModel from '../components/AddSensoryModel';

type Props = {};
export default class CadastrarSensoryScreen extends Component<Props> {

    state = {
        email: '',
        usuario: '',
        modalVisible: false,
        coordenadors:[],
        usuarioCoordenador: '',
        sensoryIFRN: [],
        produto: this.props.navigation.state.params.nomepro,
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

    async componentWillMount(){
        const sensory = JSON.parse(await AsyncStorage.getItem("@CadastrarSensory:sensoryIFRNanalise")) || [];
        this.setState({
            sensoryIFRN: sensory, 
            modalVisible: true
        });
    }

    addSensory = async(nomeInstituicao, Laboratoriolocal, tituloPrjeto,nomeProfessorOrientador, nomeAlunoResponsavelDesenvolverProjeto) =>{
        /*fetch('http://localhost:9000/api/addSensory/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nomeInstituicao: nomeInstituicao,
                Laboratoriolocal: Laboratoriolocal,
                tituloPrjeto: tituloPrjeto,
                nomeProfessorOrientador: nomeProfessorOrientador,
                nomeAlunoResponsavelDesenvolverProjeto: nomeAlunoResponsavelDesenvolverProjeto,
                produto: this.props.navigation.state.params.nomepro,
            })
        })*/
        
        const sensory = {
            id: Math.floor((Math.random() * 1000)),
            nomeInstituicao: nomeInstituicao,
            Laboratoriolocal: Laboratoriolocal,
            tituloPrjeto: tituloPrjeto,
            nomeProfessorOrientador: nomeProfessorOrientador,
            nomeAlunoResponsavelDesenvolverProjeto: nomeAlunoResponsavelDesenvolverProjeto,
            produto: this.props.navigation.state.params.nomepro,
        }

        await this.setState({
            modalVisible: false,
            sensoryIFRN:[
              ...this.state.sensoryIFRN,
              sensory,
            ]
          });
          await AsyncStorage.setItem("@CadastrarSensory:sensoryIFRNanalise", JSON.stringify(this.state.sensoryIFRN));
    }

    render() {
        return (

            <View>
            <Text>Produto Avaliado: {this.props.navigation.state.params.nomepro}</Text>
            <Text>Quesitos para serem avaliados na analise do produto {this.props.produto} </Text>
            <Text>COR</Text>
            <Text>AROMA</Text>
            <Text>TEXTURA</Text>
            <Text>SABOR</Text>
            <Text>IMPRESSÃO GLOBAL</Text>
            <AddSensoryModel visible={this.state.modalVisible} 
            onAdd={this.addSensory} onCancel={() => this.setState({modalVisible: false})}/>
            </View>
        );
    }    
}    