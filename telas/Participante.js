import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView, Image, AsyncStorage} from 'react-native';
import ListSensory from '../components/ListSensory';
 
 
type Props = {};
export default class Participante extends Component<Props> {

    state={
        sensoryIFRN: []
    }

    async componentDidMount(){
        const sensory = JSON.parse(await AsyncStorage.getItem("@CadastrarSensory:sensoryIFRNanalise")) || [];
        this.setState({
            sensoryIFRN: sensory             
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Bem-vindo</Text>                    
                </View>
                {this.state.sensoryIFRN.map(sensory =>
                        <ListSensory key={sensory.id} id={sensory.id} nomeInstituicao={sensory.nomeInstituicao} nomeProduto={sensory.produto}>
                        </ListSensory>                          
                    )}
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