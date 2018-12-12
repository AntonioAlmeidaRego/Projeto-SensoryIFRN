import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView, Image, AsyncStorage} from 'react-native';
import CoordenadorModel from '../components/CoordenadorModel';
import Coordinator from '../components/Coordinator';
type Props = {};
export default class Admin extends Component<Props> {

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
        modalVisible: false,
        coordenadors:[]
    };

    async componentDidMount(){
        const coordenadors = JSON.parse(await AsyncStorage.getItem("@CadastrarCoordenador:sensoryIFRN")) || [];
        this.setState({coordenadors});
    }

    emailExist(email){
        for(var i = 0;i<this.state.coordenadors.length;i++){
            if(this.state.coordenadors[i].email == email){
                return true;
            }
        }
        return false;
    }

    addCoordenador = async(nome, email, senha, confirmaSenha) =>{
        if(senha == confirmaSenha){
            if(!this.emailExist(email)){
                const coordenador = {
                    id: Math.floor((Math.random() * 1000)),
                    nome: nome,
                    email: email,
                    senha: senha,
                    tipoUsuario: 'Coordenador',
                  }
              
                 await this.setState({
                    modalVisible: false,
                    coordenadors:[
                      ...this.state.coordenadors,
                      coordenador,
                    ]
                  });
                  await AsyncStorage.setItem("@CadastrarCoordenador:sensoryIFRN", JSON.stringify(this.state.coordenadors));
            }else{
                alert("Email já foi cadastrado no sistema!");
            }
        }else{
            alert("Senhas não são iguais!");
        }    
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Bem-vindo, Admin</Text>
                </View>
                <View style={styles.bodyButton}>
                    <TouchableOpacity onPress={() => this.setState({modalVisible: true})} style={styles.buttonAdd}>
                        <Text style={styles.buttonText}>Adicionar Coordenadores</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView>  
                    {this.state.coordenadors.map(coordenador =>
                        <Coordinator key={coordenador.id} nome={coordenador.nome} email={coordenador.email}>
                        </Coordinator>    
                    )}
                    </ScrollView>      
                <CoordenadorModel visible={this.state.modalVisible} onAdd={this.addCoordenador} onCancel={() => this.setState({modalVisible: false})}/>
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