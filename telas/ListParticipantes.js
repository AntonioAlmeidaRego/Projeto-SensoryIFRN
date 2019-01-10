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
  TouchableOpacity,
  ScrollView,
  Image,
  AsyncStorage
} from 'react-native'; 
 
type Props = {};
export default class ListParticipantes extends Component<Props> {

    static navigationOptions = {
        drawerLabel: 'Lista de Participantes',
        drawerIcon: ({ tintColor }) => (
              <Image
                  source={require('../imagens/participantes.png')}
                  style={styles.icon}        
              />
        ),
    };

    state ={
        participacoes: [],
    }

    async componentDidMount(){         
        const participacoes = JSON.parse(await AsyncStorage.getItem("@Participacao:analise")) || [];
        this.setState({
            participacoes: participacoes,
        });         
    }
  
    render(){
        return(
            <View style={styles.container}>
                <ScrollView>
                    {this.state.participacoes.map(
                        participacao =>
                        <View key={participacao.id}>
                            <Text style={styles.text}>{participacao.nome}</Text>
                            <Text style={styles.text}>{participacao.produto}</Text>  
                            <Text style={styles.text}>{participacao.resultOpcao}</Text>  
                        </View>      
                    )}    
                </ScrollView>       
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