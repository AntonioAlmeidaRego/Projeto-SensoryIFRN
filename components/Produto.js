import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,    
  TouchableOpacity,
  Modal,
  TextInput
} from 'react-native'; 

type Props = {};
export default class Produto extends Component<Props> {

    state={
        nomeProduto: '',
    }

    verificar = async (nome) => {
        if(nome != ''){
            this.props.navigation.navigate("CadastrarSensoryScreen", {nomep: nome});
        } else{
            alert("Preencha o Campo com o nome do Produto");
        }

    }

    render(){
        return(
            <Modal visible={this.props.visible} animationType='fade' transparent={true} onRequestClose={() => {}}>
                <View style={styles.container}>
                    <View style={styles.boxContainer}>
                        <TextInput
                            style={styles.boxTextInput}
                            placeholder="Nome do Produto"  
                            autoFocus
                            value={this.state.nomeProduto}
                            onChangeText={nomeProduto => this.setState({nomeProduto})}                          
                            />                         
                        
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity onPress={() => this.verificar(this.state.nomeProduto)} style={[styles.button, styles.buttonAdd]}>
                                <Text style={styles.boxTex}>Adicionar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.props.onCancel} style={[styles.button, styles.buttonCancel]}>
                                <Text style={styles.boxTex}>Cancelar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
               </View>
            </Modal>
        );
    }

}


const styles = StyleSheet.create({
    container:{
        flex: 1,         
        justifyContent: 'center',
        
    },
    boxContainer:{
        backgroundColor: '#ccc',        
        justifyContent: 'center',  
        padding: 10,
        borderRadius: 10,   
    },
    buttonAdd:{
        backgroundColor: '#948E8E',
        paddingHorizontal: 50,
    },
    button:{
       borderRadius: 5,       
       padding: 15,    
       marginTop: 5,           
    },
    boxTextInput: {
        borderRadius: 200,
        color: '#000000',
        margin: 5,
        fontWeight: 'bold',
        alignSelf: 'stretch',
        padding: 10,
        backgroundColor: '#fff',
    },
    buttonCancel:{
       backgroundColor: '#948E8E',
       paddingHorizontal: 50,       
       marginLeft: 10,
    },
    boxTex:{
        color: '#fff',
        fontWeight: 'bold',
    },
    buttonContainer:{
        flexDirection: 'row', 
        alignSelf: 'center',      
    }
});
