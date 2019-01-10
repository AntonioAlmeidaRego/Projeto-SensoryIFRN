import React, {Component} from 'react';
import {Platform, ActivityIndicator, AsyncStorage} from 'react-native';

type Props = {};
export default class LoadingLoginScreen extends Component<Props> {

  verificarParticipante(usuario, participants){
    for(var i = 0;i<participants.length;i++){
      if(participants[i].email == usuario.email){
        return true;
      }
    }
    return false;
  }

  verificarCoordenador(usuario, coordenadors){
    try {
      for(var i = 0;i<coordenadors.length;i++){
        if(coordenadors[i].email == usuario.email){
          return true;
        }
      }  
      
    } catch (error) {
      alert("Erro: "+error);
    }
    return false;
  }

  async componentDidMount(){
      const usuarios = JSON.parse(await AsyncStorage.getItem("@SessaoLogin:sensoryIFRN")) || [];
      const participants = JSON.parse(await AsyncStorage.getItem("@CadastroSensory:sensoryIFRNparticipante")) || [];
      const coordenadors = JSON.parse(await AsyncStorage.getItem("@CadastrarCoordenador:sensoryIFRN")) || [];

      if(usuarios != ''){
          if(this.verificarCoordenador(usuarios, coordenadors) == true){
            this.props.navigation.navigate('StackCoordenador', {usuario: usuarios.email});
          }else if(usuarios.email == "admin"){
            this.props.navigation.navigate('StackAdmin',  {usuario: usuarios.email});
          }else if(this.verificarParticipante(usuarios, participants) == true){
            this.props.navigation.navigate('StackParticipante',  {usuario: usuarios.email});
          }
      }else{
        this.props.navigation.navigate('LoginScreen');
      }

  };

  render() {
      return(
        <ActivityIndicator
                  animating={true}
                  size='large'
                  color="#000"
                  ></ActivityIndicator>
      ); 
  }
}
 