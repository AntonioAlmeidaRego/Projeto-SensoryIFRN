import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView, Image, AsyncStorage} from 'react-native';
import Sensory from '../components/Sensory';
import AddSensoryModel from '../components/AddSensoryModel';
import Produto from '../components/Produto';
type Props = {};
export default class Coordenador extends Component<Props> {

    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
              <Image
                  source={require('../imagens/home.png')}
                  style={styles.icon}        
              />
        ),
    };

    state ={
        email: '',
        usuario: '',
        modalVisible: false,
        coordenadors:[],
        usuarioCoordenador: '',
        sensoryIFRN: [],
    };

    addProduto = async (nome) => {
        
        if(nome != ''){
            this.setState({
                modalVisible: false});
            this.props.navigation.navigate('CadastrarSensoryScreen', {nomepro: nome});
        } else{
            alert("Preencha o Campo com o nome do Produto");
        }
    }

    async componentDidMount(){
        try{
            const sensory = JSON.parse(await AsyncStorage.getItem("@CadastrarSensory:sensoryIFRNanalise")) || [];
            await this.setState({
                sensoryIFRN: sensory
            });
        }catch(error){

        }
        
    }


    /*addSensory = async(nomeInstituicao, tituloPrjeto,nomeProfessorOrientador, nomeAlunoResponsavelDesenvolverProjeto) =>{
        const sensory = {
            id: Math.floor((Math.random() * 1000)),
            nomeInstituicao: nomeInstituicao,
            tituloPrjeto: tituloPrjeto,
            nomeProfessorOrientador: nomeProfessorOrientador,
            nomeAlunoResponsavelDesenvolverProjeto: nomeAlunoResponsavelDesenvolverProjeto,
        }

        await this.setState({
            modalVisible: false,
            sensoryIFRN:[
              ...this.state.sensoryIFRN,
              sensory,
            ]
          });
          await AsyncStorage.setItem("@CadastrarSensory:sensoryIFRN", JSON.stringify(this.state.sensoryIFRN));
    }*/

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Bem-vindo</Text>
                </View>
                <View style={styles.bodyButton}>
                    <TouchableOpacity onPress={() => this.setState({modalVisible: true})} style={styles.buttonAdd}>
                        <Text style={styles.buttonText}>Adicionar Analise Sensorial</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView>  
                    {this.state.sensoryIFRN.map(sensory =>
                        <Sensory key={sensory.id} nomeInstituicao={sensory.nomeInstituicao} nomeProfessorOrientador={sensory.nomeProfessorOrientador} />    
                    )}
                    </ScrollView>      
                <Produto visible={this.state.modalVisible} onAdd={this.addProduto} onCancel={() => this.setState({modalVisible: false})}/>
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