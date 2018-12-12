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
export default class CoordenadorModel extends Component<Props> {
    
    state={
        nome: '',
        email: '',
        senha: '',
        confirmaSenha: '',
    }

    clearfields = async() =>{
            this.setState({
                nome: '',
                email: '',
                senha: '',
                confirmaSenha: '',
            });
    }

    render(){
        return(
            <Modal visible={this.props.visible} animationType='fade' transparent={true} onRequestClose={() => {}}>
                <View style={styles.container}>
                    <View style={styles.boxContainer}>
                        <TextInput
                            style={styles.boxTextInput}
                            placeholder="Nome"  
                            autoFocus
                            value={this.state.nome}
                            onChangeText={nome => this.setState({nome})}                          
                            />                         
                        <TextInput 
                            placeholder="Email"
                            style={styles.boxTextInput} 
                            autoFocus
                            value={this.state.email}
                            onChangeText={email => this.setState({email})}
                            />
                        <TextInput 
                            secureTextEntry={true}
                            placeholder="Senha"
                            style={styles.boxTextInput} 
                            autoFocus
                            value={this.state.senha}
                            onChangeText={senha => this.setState({senha})}
                            />    
                         <TextInput 
                            secureTextEntry={true}
                            placeholder="Confirmar Senha"
                            style={styles.boxTextInput} 
                            autoFocus
                            value={this.state.confirmaSenha} 
                            onChangeText={confirmaSenha => this.setState({confirmaSenha})}
                            />        
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity onPress={() => [this.props.onAdd(this.state.nome, this.state.email, this.state.senha, this.state.confirmaSenha)
                            , this.clearfields()]} 
                             style={[styles.button, styles.buttonAdd]}>
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
        backgroundColor: '#ddd',
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