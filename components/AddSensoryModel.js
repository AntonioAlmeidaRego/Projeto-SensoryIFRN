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
export default class AddSensoryModel extends Component<Props> {
    
    state={
        nomeInstituicao: '',
        Laboratoriolocal: '',
        tituloPrjeto: '',
        nomeProfessorOrientador: '',
        nomeAlunoResponsavelDesenvolverProjeto: '',
    }

    render(){
        return(
            <Modal visible={this.props.visible} animationType='fade' transparent={true} onRequestClose={() => {}}>
                <View style={styles.container}>
                    <View style={styles.boxContainer}>
                        <TextInput
                            style={styles.boxTextInput}
                            placeholder="Nome da Instituição"  
                            autoFocus
                            value={this.state.nomeInstituicao}
                            onChangeText={nomeInstituicao => this.setState({nomeInstituicao})}                          
                            />  
                        <TextInput
                            style={styles.boxTextInput}
                            placeholder="Nome da Laboratório"  
                            //autoFocus
                            value={this.state.Laboratoriolocal}
                            onChangeText={Laboratoriolocal => this.setState({Laboratoriolocal})}                          
                            />                         
                        <TextInput 
                            placeholder="Titulo do Projeto"
                            style={styles.boxTextInput} 
                            //autoFocus
                            value={this.state.tituloPrjeto}
                            onChangeText={tituloPrjeto => this.setState({tituloPrjeto})}
                            />
                        <TextInput 
                            placeholder="Nome do Professor Orientador"
                            style={styles.boxTextInput} 
                            //autoFocus
                            value={this.state.nomeProfessorOrientador}
                            onChangeText={nomeProfessorOrientador => this.setState({nomeProfessorOrientador})}
                            />  
                              
                         <TextInput 
                            placeholder="Nome do Aluno responsavel pelo desenvolvimento do Projeto"
                            style={styles.boxTextInput} 
                            //autoFocus
                            value={this.state.nomeAlunoResponsavelDesenvolverProjeto}
                            onChangeText={nomeAlunoResponsavelDesenvolverProjeto => this.setState({nomeAlunoResponsavelDesenvolverProjeto})}
                            />        
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity onPress={() => this.props.onAdd(this.state.nomeInstituicao, this.state.Laboratoriolocal, this.state.tituloPrjeto, this.state.nomeProfessorOrientador, this.state.nomeAlunoResponsavelDesenvolverProjeto)} style={[styles.button, styles.buttonAdd]}>
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