import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView, Image, AsyncStorage} from 'react-native';
import ListSensory from '../components/ListSensory';
 
 
type Props = {};
export default class Participante extends Component<Props> {

    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
              <Image
                  source={require('../imagens/home.png')}
                  style={styles.icon}        
              />
        ),
    };

    constructor(props){
        super(props);      
       
        this.participar = this.participar.bind(this);
    }
  

    state={
        sensoryIFRN: [],
        usuario: '',
    }

    async componentDidMount(){
        const sensory = JSON.parse(await AsyncStorage.getItem("@CadastrarSensory:sensoryIFRNanalise")) || [];
        const participante = JSON.parse(await AsyncStorage.getItem("@SessaoLogin:sensoryIFRN")) || [];
        this.setState({
            sensoryIFRN: sensory,
            usuario: participante             
        });
    }

    participar(id, produto){
        this.props.navigation.navigate('Question', {id: id, produto:produto});
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Bem-vindo, {this.state.usuario.email}</Text>                    
                </View>
                <ScrollView>
                {this.state.sensoryIFRN.map(sensory =>
                        <ListSensory key={sensory.id} id={sensory.id} nomeInstituicao={sensory.nomeInstituicao}
                        onParticipar={this.participar.bind(this, sensory.id, sensory.produto)} nomeProduto={sensory.produto}>
                        </ListSensory>                          
                    )}
                </ScrollView>
                <View></View>
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
        backgroundColor: '#ccc',
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
    
});