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
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image,
  AsyncStorage,
  ScrollView
} from 'react-native';

type Props = {};
export default class LoginScreen extends Component<Props> {

  state = {
    email: '',
    senha: '',  
    usuario:'', 
    participantes:[],     
    coordenadors:[],
  };

  async componentDidMount(){
      const participante = JSON.parse(await AsyncStorage.getItem("@CadastroSensory:sensoryIFRNparticipante")) || [];
      const coordenador = JSON.parse(await AsyncStorage.getItem("@CadastrarCoordenador:sensoryIFRN")) || [];
        this.setState({
          participantes: participante,
          coordenadors: coordenador
        });   
  }

  verificarParticipante(email, senha){
    const participante = this.state.participantes;
    for(var i = 0; i<participante.length;i++){
      if((participante[i].email == email) && (participante[i].senha == senha) && (participante[i].tipoUsuario == "Participante")){
        return true;
      }
    }
    return false;
  }

  verificarCoordenador(email, senha){
    const coordenador = this.state.coordenadors;
    for(var i = 0; i<coordenador.length;i++){
        if((coordenador[i].email == email) && (coordenador[i].senha == senha) && (coordenador[i].tipoUsuario == "Coordenador")){
          return true;
        }
    }
    return false;
  }

  criarSessao = async (email, senha) =>{

    try {
      const usuario={
        id: Math.floor((Math.random() * 1000)),
        email: email,
        senha: senha, 
      }
  
      await AsyncStorage.setItem("@SessaoLogin:sensoryIFRN", JSON.stringify(usuario));
    } catch (error) {
      alert("Erro: "+error);
    }
    
  }

  navegarTelaCadastro = async () =>{
    this.props.navigation.navigate('CadastroScreen');
  }

  navegarTelaAdmin = async() =>{
    this.props.navigation.navigate('StackAdmin');
  }

  navegarTelaParticipanteLogado = async () =>{
    this.props.navigation.navigate('StackParticipante');
  }

  navegarTelaCoordenadorLogado = async() =>{
    this.props.navigation.navigate('StackCoordenador');
  }

  verificarUsuario = async(email, password) =>{

   try {
          if(email != "" && password != ""){
            if(email == "admin" && password == "admin"){
              this.criarSessao(email, password);
              this.navegarTelaAdmin();
            }else if(this.verificarParticipante(email, password)){
              this.criarSessao(email, password);
              this.navegarTelaParticipanteLogado();
            }else if(this.verificarCoordenador(email, password)){
              this.criarSessao(email, password);
              this.navegarTelaCoordenadorLogado();
            }else{
              alert("Usuário inválido"),
              this.setState({
                senha: ''
              });
            }
        }else{
          alert("Preencha todos os dados!");
        }
   } catch (error) {
     alert("Erro: "+error);
   }

  };

  render() {
    return (
      <ImageBackground style={styles.imagemFundo}>
        <View style={styles.body}>
            <ScrollView>
                    <View style={styles.logomarca}>
                        <Image source={require('../imagens/logoProjetoSensoryIFRN.png')} style={styles.imagem}/>
                    </View>
            
                  <View style={styles.bodyTextInput}>
                      <TextInput
                          style={styles.boxTextInput}
                          placeholder="Email"  
                          autoFocus
                          value={this.state.email}
                          onChangeText={email => this.setState({email})}                          
                          />                         
                      <TextInput 
                          secureTextEntry={true}
                          placeholder="Senha"
                          style={styles.boxTextInput}                            
                          value={this.state.senha}
                          onChangeText={senha => this.setState({senha})}
                          />
                      <View style={styles.buttonContainer}>
                          <TouchableOpacity onPress={() => this.verificarUsuario(this.state.email, this.state.senha)} style={[styles.button, styles.buttonLogin]}>
                              <Text style={styles.buttonTex}>Entrar</Text>
                          </TouchableOpacity>                 
                          <TouchableOpacity onPress={this.navegarTelaCadastro} style={[styles.button, styles.buttonCadastro]}>
                              <Text style={styles.buttonTex}>Criar Cadastro</Text>
                          </TouchableOpacity>       
                      </View>
                  </View>
            </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  body:{
    flex: 1,
    justifyContent: 'center',
  },
  imagemFundo: {
    width: '100%', height: '100%',
    backgroundColor: '#fff',
  },
  bodyTextInput:{
    width: '90%',
    alignSelf: 'center',
  },
  boxTextInput:{
    backgroundColor: '#ccc',
    borderRadius: 50,
    margin: 5,
    padding: 12,
    color: '#000',
    fontSize: 17,
  },
  buttonLogin:{
    backgroundColor: '#948E8E',
    alignSelf: 'center',
    width: '50%',
  },

  buttonCadastro:{
    backgroundColor: '#948E8E',
    alignSelf: 'center',
    width: '50%',
    marginBottom: 30,
  },
  button:{
    borderRadius: 5,       
    padding: 15,    
    margin: 5,           
  },

  logomarca:{
    margin: 30,
  },

  buttonTex:{
    color: '#fff',
    fontSize: 17,
    textAlign: 'center',
 },

 imagem:{
  width: 250,     
  alignSelf: 'center',
  height: 150,
},

lengenda:{
  fontWeight: 'bold',
  fontSize: 20,
  color: '#000',
  alignSelf: 'center',
},
});





